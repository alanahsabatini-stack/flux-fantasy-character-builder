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
// SPECIALTY FUNCTIONS
// ========================================

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

function findSpecialty(name) {
    return specialties.find(function(specialty) {
        return specialty.name === name;
    });
}

specialtySelect.addEventListener("change", function() {
    const selectedSpecialty = findSpecialty(specialtySelect.value);

    character.specialty = selectedSpecialty.name;
    character.karmaPool = selectedSpecialty.startingKarma;

    if (character.currentStudy !== null) {
        removeStudyModifier(character.currentStudy);
    }

    character.study = "";
    character.currentStudy = null;
    summaryStudy.textContent = "Not Selected";
    studyEffect.textContent = "Study Effect: None";

    talentAura.textContent = character.talents.aura;
    talentStamina.textContent = character.talents.stamina;
    talentAgility.textContent = character.talents.agility;
    talentWillpower.textContent = character.talents.willpower;
    talentFunction.textContent = character.talents.function;
    talentTechnique.textContent = character.talents.technique;
    
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

studySelect.addEventListener("change", function() {
    if (character.currentStudy !== null) {
        removeStudyModifier(character.currentStudy);
    }

    character.study = studySelect.value;

    const selectedSpecialty = findSpecialty(character.specialty);

    const selectedStudy = selectedSpecialty.studies.find(function(study) {
        return study.name === character.study;
    });

    applyStudyModifier(selectedStudy);

    studyEffect.textContent = `Study Effect: +${selectedStudy.modifier} ${formatStatName(selectedStudy.stat)}`;

    character.currentStudy = selectedStudy;

    summaryStudy.textContent = character.study;

    talentAura.textContent = character.talents.aura;
    talentStamina.textContent = character.talents.stamina;
    talentAgility.textContent = character.talents.agility;
    talentWillpower.textContent = character.talents.willpower;
    talentFunction.textContent = character.talents.function;
    talentTechnique.textContent = character.talents.technique;

    console.log(character);
});

function applyStudyModifier(study) {
    character.talents[study.stat] += study.modifier;
}

function removeStudyModifier(study) {
    character.talents[study.stat] -= study.modifier;
}

function formatStatName(stat) {
    return stat.charAt(0).toUpperCase() + stat.slice(1);
}