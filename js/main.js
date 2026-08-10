// ========================================
// PROJECT: Flux Fantasy Character Builder
// TITLE: JavaScript Main
// PROGRAMMER: Alanah Sabatini
// DATE: 08/08/2026
// LATEST REVISION: 08/09/2026
// ========================================

console.log("Flux Fantasy Character Builder loaded!")

// ========================================
// CHARACTER DATA
// ========================================

const character = {
    name: "",
    alias: "",
    age: 0,
    gender: "",
    specialty: "",
    study: "",
    currentStudy: null,
    karmaPool: 0,
    baseTalents: {
        aura: 0,
        stamina: 0,
        agility: 0,
        willpower: 0,
        function: 0,
        technique: 0
    },
    talents: {
        aura: 0,
        stamina: 0,
        agility: 0,
        willpower: 0,
        function: 0,
        technique: 0
    },       
    traits: [
        "Dependable",
        "Observant",
        "Resilient"
    ]

};

// ========================================
// TRAIT DEFINITIONS
// ========================================

const traitDefinitions = [
    {
        name: "Dependable",
        effect: "Combos cost 2 less KP."
    },
    {
        name: "Observant",
        effect: "+2 to Function rolls when the initial roll is lower than 10."
    }
];


// ========================================
// KARMA SPECIALTIES
// ========================================

const specialties = [
    {
        name: "Escape Artist",
        startingKarma: 25,
        medKitPercent: 25,
        studies: [
            {
                name: "Creative Karmastry",
                stat: "technique",
                modifier: 1
            },
            {
                name: "Clockwork Karmastry",
                stat: "agility",
                modifier: 1
            },
            {
                name: "Bio Karmastry",
                stat: "function",
                modifier: 1
            },
            {
                name: "Machine Karmastry",
                stat: "stamina",
                modifier: 1
            },
            {
                name: "Quantum Karmastry",
                stat: "willpower",
                modifier: 1
            }
        ]
    },
    {
        name: "Special Agent",
        startingKarma: 20,
        medKitPercent: 100,
        studies: [
            {
                name: "Scout",
                stat: "agility",
                modifier: 1
            },
            {    
                name: "Disrupter",
                stat: "willpower",
                modifier: 1
            },
            {
                name: "Bodyguard",
                stat: "stamina",
                modifier: 1
            },
            {
                name: "Operative",
                stat: "aura",
                modifier: 1
            },
            {
                name: "Tinker",
                stat: "technique",
                modifier: 1
            }
        ]
    },
    {
        name: "Ink Fighter",
        startingKarma: 20,
        medKitPercent: 50,
        studies: [
            {
                name: "Melee",
                stat: "aura",
                modifier: 1
            },
            {
                name: "Projectile",
                stat: "technique",
                modifier: 1
            },
            {
                name: "Animal",
                stat: "agility",
                modifier: 1
            },
            {
                name: "Body",
                stat: "function",
                modifier: 1
            },
            {
                name: "Elemental",
                stat: "willpower",
                modifier: 1
            }
        ]
    },
    {
        name: "Clockbot",
        startingKarma: 20,
        medKitPercent: 25,
        studies: [
            {
                name: "D-Type (Decoy)",
                stat: "stamina",
                modifier: 1
            },
            {
                name: "K-Type (Karmastry-Assist)",
                stat: "willpower",
                modifier: 1
            },
            {
                name: "M-Type (Medical)",
                stat: "function",
                modifier: 1
            },
            {
                name: "H-Type (Heavy)",
                stat: "agility",
                modifier: 1
            },
            {
                name: "X-Type (Experimental)",
                stat: "technique",
                modifier: 1
            }
        ]
    }
];

// ========================================
// TALENT MODIFIER POOL
// ========================================

const talentModifierPool = {
    1: 1,
    2: 3,
    3: 2
};

// ========================================
// SPECIALTY FUNCTIONS
// ========================================

// =========== DOM References ============

const specialtySelect = document.getElementById("specialtySelect");
const specialtyInfo = document.getElementById("specialtyInfo");

const studySelect = document.getElementById("studySelect");
const studyInfo = document.getElementById("studyInfo");

const summarySpecialty = document.getElementById("summarySpecialty");
const summaryKarma = document.getElementById("summaryKarma");
const summaryStudy = document.getElementById("summaryStudy");

const studyEffect = document.getElementById("studyEffect");

const talentAura = document.getElementById("talentAura");
const talentStamina = document.getElementById("talentStamina");
const talentAgility = document.getElementById("talentAgility");
const talentWillpower = document.getElementById("talentWillpower");
const talentFunction = document.getElementById("talentFunction");
const talentTechnique = document.getElementById("talentTechnique");

const available1 = document.getElementById("available1");
const available2 = document.getElementById("available2");
const available3 = document.getElementById("available3");

const modifierButtons = document.querySelectorAll(".modifierButton");

const resetTalentsButton = document.getElementById("resetTalents");

// =========== Talent Modifier Buttons ============

modifierButtons.forEach(function(button) {
    button.addEventListener("click",function() {
        const talent = button.dataset.talent;
        const modifier = Number(button.dataset.modifier);
        const currentModifier = character.baseTalents[talent];

        // Clicking the currently selected modifier removes it
        if (currentModifier === modifier) {
            character.baseTalents[talent] = 0;
            talentModifierPool[modifier]++;
        }

        // Clicking a different modifier changes the assignment
        else {
            // Make sure the new modifier is still available
            if (talentModifierPool[modifier] === 0) {
                return;
            }

            // Return the old modifier to the pool
            if (currentModifier !== 0) {
                talentModifierPool[currentModifier]++;
            }

            //Assign the new modifier
            character.baseTalents[talent] = modifier;
            talentModifierPool[modifier]--;
        }

        // Calculate final Talent values
        calculateTalents();

        // Update button highlighting
        const talentButtons = document.querySelectorAll(
            `.modifierButton[data-talent="${talent}"]`
        );

        talentButtons.forEach(function(talentButton) {
            talentButton.classList.remove("selected");
        });

        if (character.baseTalents[talent] !== 0) {
            button.classList.add("selected");
        }

        // Update the displayed base value
        const displayName =
            talent.charAt(0).toUpperCase() + talent.slice(1);

        document.getElementById(`base${displayName}`).textContent =
            character.baseTalents[talent];
        
        // Update modifier pool display
        updateModifierPoolDisplay();

        console.log(character.baseTalents);
    });
});

function updateModifierPoolDisplay() {
    available1.textContent = talentModifierPool[1];
    available2.textContent = talentModifierPool[2];
    available3.textContent = talentModifierPool[3];

    updateModifierButtons();
}

function updateModifierButtons() {
    modifierButtons.forEach(function(button) {
        const modifier = Number(button.dataset.modifier);

        if (
            talentModifierPool[modifier] === 0 &&
            !button.classList.contains("selected")
        ) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

// ============== Talent Reset ================

function resetBaseTalents() {
    character.baseTalents.aura = 0;
    character.baseTalents.stamina = 0;
    character.baseTalents.agility = 0;
    character.baseTalents.willpower = 0;
    character.baseTalents.function = 0;
    character.baseTalents.technique = 0;

    talentModifierPool[1] = 1;
    talentModifierPool[2] = 3;
    talentModifierPool[3] = 2;

    modifierButtons.forEach(function(button) {
        button.classList.remove("selected");
        button.disabled = false;
    });

    document.getElementById("baseAura").textContent = 0;
    document.getElementById("baseStamina").textContent = 0;
    document.getElementById("baseAgility").textContent = 0;
    document.getElementById("baseWillpower").textContent = 0;
    document.getElementById("baseFunction").textContent = 0;
    document.getElementById("baseTechnique").textContent = 0;
    
    updateModifierPoolDisplay();

    console.log("Base Talents Reset");
}

resetTalentsButton.addEventListener("click", function() {
    resetBaseTalents();
});

// =========== Talent Calculations ============

function calculateTalents() {
    character.talents.aura = character.baseTalents.aura;
    character.talents.stamina = character.baseTalents.stamina;
    character.talents.agility = character.baseTalents.agility;
    character.talents.willpower = character.baseTalents.willpower;
    character.talents.function = character.baseTalents.function;
    character.talents.technique = character.baseTalents.technique;

    if (character.currentStudy !== null) {
        character.talents[character.currentStudy.stat] += character.currentStudy.modifier;
    }
}

// =========== Specialty Functions ============

function findSpecialty(name) {
    return specialties.find(function(specialty) {
        return specialty.name === name;
    });
}

specialtySelect.addEventListener("change", function() {
    const selectedSpecialty = findSpecialty(specialtySelect.value);

    character.specialty = selectedSpecialty.name;
    character.karmaPool = selectedSpecialty.startingKarma;

    character.study = "";
    character.currentStudy = null;
    calculateTalents();
    summaryStudy.textContent = "Not Selected";
    studyEffect.textContent = "Study Effect: None";
    
    summarySpecialty.textContent = character.specialty;
    summaryKarma.textContent = character.karmaPool;

    specialtyInfo.innerHTML = `
        <p>Specialty: ${selectedSpecialty.name}</p>
        <p>Starting Karma: ${selectedSpecialty.startingKarma}</p>
        <p>Med Kit: ${selectedSpecialty.medKitPercent}% of HP</p>
    `;

    studySelect.innerHTML = '<option value="">--Select a Study --</option>';
    studySelect.value = "";

    selectedSpecialty.studies.forEach(function(study) {
        const option = document.createElement("option");
        option.value = study.name;
        option.textContent = study.name;
        studySelect.appendChild(option);
    });

    studySelect.disabled = false;
});

// =========== Study Functions ============

studySelect.addEventListener("change", function() {
    character.study = studySelect.value;

    const selectedSpecialty = findSpecialty(character.specialty);

    const selectedStudy = selectedSpecialty.studies.find(function(study) {
        return study.name === character.study;
    });

    studyEffect.textContent = `Study Effect: +${selectedStudy.modifier} ${formatStatName(selectedStudy.stat)}`;

    character.currentStudy = selectedStudy;
    character.study = selectedStudy.name;

    calculateTalents();

    summaryStudy.textContent = character.study;
});

// =========== Utility Functions ============

function formatStatName(stat) {
    return stat.charAt(0).toUpperCase() + stat.slice(1);
}
