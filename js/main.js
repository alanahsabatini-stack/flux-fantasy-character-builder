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
    affiliation: "",
    affiliationName: "",
    affiliationDescription: "",
    affiliationTrait: "",
    affiliationFlaw: "",
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
    hp: 10,
    mov: 1,
    defense: 0,
    traits: [],
    flaws: []
};

// ========================================
// TRAITS & FLAWS
// ========================================

const traitDefinitions = [
    {
        name: "Dependable",
        definition: "Others trust and look up to you.",
        effect: "Combos cost 2 less KP."
    },
    {
        name: "Good Looking",
        definition: "Hey there, handsome!",
        effect: "+2 to Aura rolls when the initial roll is lower than 10."
    },
    {
        name: "Handy",
        definition: "You're good at fixing things.",
        effect: "Pass 3 Technique checks without rolling per Checkpoint."
    },
    {
        name: "Determined",
        definition: "You won't let anything stop you!",
        effect: "Trade a Quick Action for another turn of Movement in combat."
    },
    {
        name: "Calm",
        definition: "You're cool under pressure.",
        effect: "+1 Quick Action per turn in combat."
    },
    {
        name: "Talented",
        definition: "Wow, you're a natural at this!",
        effect: "Add +1 Modifier to any one Talent under 3."
    },
    {
        name: "Loyal",
        definition: "You stick by those you care about.",
        effect: "Ability to share the effects of Med Kits with another Player."
    },
    {
        name: "Inspirational",
        definition: "You lift others up when they need it most.",
        effect: "Add your Modifier to another Player's Basic Action roll twice per Checkpoint."
    },
    {
        name: "Honorable",
        definition: "You always do the right thing.",
        effect: "Common and Uncommon trading cards now have two uses per game instead of 1."
    },
    {
        name: "Spunky",
        definition: "You've got a lot of energy.",
        effect: "Gain ⧗5 for every natural 20 roll."
    },
    {
        name: "Protective",
        definition: "Always standing up for others.",
        effect: "+2 DEF when performing a Defense move in combat."
    },
    {
        name: "Thrifty",
        definition: "You're always finding a good deal.",
        effect: "Gain an additional +⧗5 when finding merits."
    },
    {
        name: "Observant",
        definition: "Great eye!",
        effect: "+2 to Function rolls when the initial roll is lower than 10."
    },
    {
        name: "Adaptable",
        definition: "It's a good thing you're flexible.",
        effect: "When failing a Basic Action roll, reroll 2 times per Checkpoint."
    },
    {
        name: "Resilient",
        definition: "You're tough.",
        effect: "+1 Destiny Rewrite per Checkpoint."
    },
    {
        name: "Student",
        definition: "",
        effect: "For any Technique or Willpower roll, roll 2 dice and take the better of the two rolls."
    },
    {
        name: "Social Butterfly",
        definition: "",
        effect: "Combos take 5 less KP."
    },
    {
        name: "Full Assault",
        definition: "",
        effect: "Ability to attack 3 times per combat without raising the danger or Payback Level."
    },
    {
        name: "Get Back Up",
        definition: "",
        effect: "When below 25% HP, add +3 to all rolls."
    },
    {
        name: "Bot Lover",
        definition: "",
        effect: "+3 Aura when communicating with bots."
    },
    {
        name: "Diplomatic Immunity",
        definition: "",
        effect: "+4 Damage on all attacks when fighting against Special Agents."
    },
    {
        name: "Tough Guy",
        definition: "",
        effect: "All attacks +3 damage."
    }
];

const flawDefinitions = [
    {
        name: "Hot Headed",
        definition: "You get too worked up too quickly.",
        effect: "Lose your first turn at the start of battle."
    },
    {
        name: "Insecure",
        definition: "Constantly second-guessing yourself.",
        effect: "-2 to recovery rolls for karma recharging."
    },
    {
        name: "Tongue Tied",
        definition: "Oops, you said the wrong thing again.",
        effect: "-1 to Aura rolls."
    },
    {
        name: "Arrogant",
        definition: "You think you're all that, huh?",
        effect: "When rolling for Willpower, roll twice and take the lower result."
    },
    {
        name: "Reckless",
        definition: "Rushed into things and made a mess again.",
        effect: "-2 damage done by your Basic Attack."
    },
    {
        name: "Selfish",
        definition: "MINE. MINE. MINE.",
        effect: "When shopping, prices are +⧗10 for all items."
    },
    {
        name: "Unmotivated",
        definition: "You don't really care.",
        effect: "-1 to all Agility rolls."
    },
    {
        name: "Clumsy",
        definition: "Where did I put that?",
        effect: "Only carry up to 10 items at a time."
    },
    {
        name: "Paranoid",
        definition: "Someone is watching me!",
        effect: "Basic Defense powers cost +5 KP more to perform."
    },
    {
        name: "Cowardly",
        definition: "You're not one to rush into battle.",
        effect: "When in combat you'll always be last to take a turn."
    },
    {
        name: "Secretive",
        definition: "You don't trust anyone.",
        effect: "Can't share items with others."
    },
    {
        name: "Lovesick",
        definition: "You fall in love with everyone you meet.",
        effect: "When rolling for Aura, roll twice and take the lower result."
    },
    {
        name: "Distracted",
        definition: "Huh? What did you say?",
        effect: "On rolls requiring multiple Players to succeed, subtract 2 from your roll result."
    },
    {
        name: "Extravagant",
        definition: "You have expensive taste.",
        effect: "Items cost +⧗5 more than listed."
    },
    {
        name: "Distant",
        definition: "You keep others at a distance.",
        effect: "Can only perform one Combo during combat."
    },
    {
        name: "Still Learning",
        definition: "",
        effect: "All karma attacks cost 3 more KP."
    },
    {
        name: "Elitist",
        definition: "",
        effect: "Can't perform Combos with Special Agents or Ink Fighter Elites."
    },
    {
        name: "Disliked",
        definition: "",
        effect: "-2 to Aura rolls."
    },
    {
        name: "Bruised",
        definition: "",
        effect: "-1 to Function rolls."
    },
    {
        name: "Socially Awkward",
        definition: "",
        effect: "-3 Aura when speaking with humans."
    },
    {
        name: "Language Barrier",
        definition: "",
        effect: "-1 to Technique rolls."
    },
    {
        name: "Loner",
        definition: "",
        effect: "Can't perform Combos."
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
// AFFILIATIONS
// ========================================

const affiliations = [
    {
        name: "Academia",
        associations: ["Escape Artist", "Special Agent", "Ink Fighter"],
        defenseModifier: 1,
        trait: "Student",
        flaw: "Still Learning",
        description: "It's rare to learn karmastry without a master. Whether you're in public school, a private academy like Wolfgang, or a government-run facility, there's always someone ready to teach."
    },
    {
        name: "GEARS",
        associations: ["Escape Artist", "Clockbot"],
        defenseModifier: 2,
        trait: "Social Butterfly",
        flaw: "Elitist",
        description: "The Great Escape Artist Society. It's not just about being a top-tier Escape Artist; it's about wielding significant influence and having a shot at the presidency of Fortuna. Membership is a golden ticket to power and prestige."
    },
    {
        name: "The NKA",
        associations: ["Escape Artist", "Special Agent", "Ink Fighter", "Clockbot"],
        defenseModifier: 2,
        trait: "Full Assault",
        flaw: "Disliked",
        description: "The National Karmastry Authority. These are the karma cops, the enforcers, and the watchdogs. The NKA regulates and monitors karmastry use, hunting down offenders and enforcing karmic laws. If you like seeing justice served, this is your crew."
    },
    {
        name: "Ink Fighting Elite",
        associations: ["Ink Fighter"],
        defenseModifier: 3,
        trait: "Get Back Up",
        flaw: "Bruised",
        description: "Top-tier fighters with the skills to back it up, these warriors dominate the flux destiny boxing rings and underground fight clubs. They’re the best of the best, showcased on TV and revered in the streets."
    },
    {
        name: "Clockbot Union",
        associations: ["Escape Artist", "Special Agent", "Ink Fighter", "Clockbot"],
        defenseModifier: 3,
        trait: "Bot Lover",
        flaw: "Socially Awkward",
        description: "Clockbots and their human allies form this union, standing together against mistreatment and sharing groundbreaking knowledge. They’ve carved out a respected place in Fortuna’s society, though the work can get pretty lonely."
    },
    {
        name: "Foreign Visitor",
        associations: ["Escape Artist", "Special Agent", "Ink Fighter", "Clockbot"],
        defenseModifier: 2,
        trait: "Diplomatic Immunity",
        flaw: "Language Barrier",
        description: "You’re not from Fortuna, but you’re here for the long haul. Maybe you’ve got special visa paperwork from Paragon or hail from the distant Hanto Union isles. Perhaps you’re an immigrant chasing a fresh start. Whatever the case, you’re ready to make your mark and carve out your own slice of the Fortunan Dream."
    },
    {
        name: "Independent",
        associations: ["Escape Artist", "Special Agent", "Ink Fighter", "Clockbot"],
        defenseModifier: 1,
        trait: "Tough Guy",
        flaw: "Loner",
        description: "You’re a lone wolf, self-taught, and you like it that way. You learned the hard way, on the streets or by yourself. Teaming up is a hassle, and you trust no one, not even other independents."
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
// DOM REFERENCES
// ========================================

const specialtySelect = document.getElementById("specialtySelect");
const specialtyInfo = document.getElementById("specialtyInfo");

const studySelect = document.getElementById("studySelect");
const studyInfo = document.getElementById("studyInfo");

const summarySpecialty = document.getElementById("summarySpecialty");
const summaryKarma = document.getElementById("summaryKarma");
const summaryStudy = document.getElementById("summaryStudy");

const studyEffect = document.getElementById("studyEffect");

const affiliationSelect = document.getElementById("affiliationSelect");
const affiliationInfo = document.getElementById("affiliationInfo");
const affiliationName = document.getElementById("affiliationName");
const affiliationDescription = document.getElementById("affiliationDescription");
const applyAffiliationButton = document.getElementById("applyAffiliationButton");

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

const traitList = document.getElementById("traitList");
const flawList = document.getElementById("flawList");

const traitCount = document.getElementById("traitCount");
const flawCount = document.getElementById("flawCount");

const traitFlawAffiliationNote = document.getElementById("traitFlawAffiliationNote");
const traitFlawBalanceStatus = document.getElementById("traitFlawBalanceStatus");

// ========================================
// SPECIALTY FUNCTIONS
// ========================================

function findSpecialty(name) {
    return specialties.find(function(specialty) {
        return specialty.name === name;
    });
}

function populateAffiliations() {
    affiliationSelect.innerHTML =
        '<option value="">-- Select an Affiliation --</option>';

    affiliations.forEach(function(affiliation) {
        const option = document.createElement("option");

        option.value = affiliation.name;
        option.textContent = affiliation.name;

        affiliationSelect.appendChild(option);
    });
}

populateAffiliations();

function updateAffiliationOptions() {
    const selectedSpecialty = character.specialty;

    affiliations.forEach(function(affiliation) {
        const option = Array.from(affiliationSelect.options)
            .find(function(option) {
                return option.value === affiliation.name;
            });

        if (affiliation.associations.includes(selectedSpecialty)) {
            option.disabled = false;
        } else {
            option.disabled = true;
        }
    });
}

specialtySelect.addEventListener("change", function() {
    const selectedSpecialty = findSpecialty(specialtySelect.value);

    character.specialty = selectedSpecialty.name;
    character.karmaPool = selectedSpecialty.startingKarma;

    character.study = "";
    character.currentStudy = null;
    character.affiliation = "";
    affiliationSelect.value = "";
    affiliationInfo.innerHTML = "";
    character.affiliationName = "";
    character.affiliationDescription = "";
    character.affiliationTrait = "";
    character.affiliationFlaw = "";
    character.defense = 0;
    affiliationName.value = "";
    affiliationDescription.value = "";
    character.traits = [];
    character.flaws = [];

    updateTraitFlawDisplay();

    calculateTalents();
    calculateDerivedStats();
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
    affiliationSelect.disabled = false;
    updateAffiliationOptions();
});

// ========================================
// STUDY FUNCTIONS
// ========================================

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
    calculateDerivedStats();

    summaryStudy.textContent = character.study;
});

// ========================================
// AFFILIATION FUNCTIONS
// ========================================

function findAffiliation(name) {
    return affiliations.find(function(affiliation) {
        return affiliation.name === name;
    });
}

affiliationSelect.addEventListener("change", function() {
    const selectedAffiliation = findAffiliation(affiliationSelect.value);

    character.affiliation = selectedAffiliation.name;
    character.defense = selectedAffiliation.defenseModifier;
    character.affiliationTrait = selectedAffiliation.trait;
    character.affiliationFlaw = selectedAffiliation.flaw;
    character.traits = [selectedAffiliation.trait];
    character.flaws = [selectedAffiliation.flaw];

    updateTraitFlawDisplay();

    affiliationName.value = selectedAffiliation.name;
    affiliationDescription.value = selectedAffiliation.description;

    character.affiliationName = selectedAffiliation.name;
    character.affiliationDescription = selectedAffiliation.description;

    affiliationInfo.innerHTML = `
        <p>Affiliation: ${selectedAffiliation.name}</p>
        <p>${selectedAffiliation.description}</p>
        <p>Defense Modifier: +${selectedAffiliation.defenseModifier}</p>
        <p>Trait: ${selectedAffiliation.trait}</p>
        <p>Flaw: ${selectedAffiliation.flaw}</p>
    `;
});

applyAffiliationButton.addEventListener("click", function() {
    character.affiliationName = affiliationName.value;
    character.affiliationDescription = affiliationDescription.value;

    console.log("Custom Affiliation Saved");
    console.log(character.affiliationName);
    console.log(character.affiliationDescription);
});

// ========================================
// TALENT MODIFIER BUTTONS
// ========================================

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
        calculateDerivedStats();

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

    calculateTalents();
    calculateDerivedStats();

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

// ========== Derived Stat Calculations ==========

function calculateDerivedStats() {
    character.hp = 10 + character.talents.function;
    character.mov = 1 + character.talents.agility;
}

// ========================================
// TRAITS/FLAWS FUNCTIONS
// ========================================

function findTrait(name) {
    return traitDefinitions.find(function(trait) {
        return trait.name === name;
    });
}

function findFlaw(name) {
    return flawDefinitions.find(function(flaw) {
        return flaw.name === name;
    });
}

function addTrait(name) {
    if (character.traits.includes(name)) {
        return false;
    }

    if (character.traits.length >= 5) {
        return false;
    }

    character.traits.push(name);
    updateTraitFlawDisplay();
    return true;
}

function addFlaw(name) {
    if (character.flaws.includes(name)) {
        return false;
    }

    if (character.flaws.length >= 5) {
        return false;
    }

    character.flaws.push(name);
    updateTraitFlawDisplay();
    return true;
}

function removeTrait(name) {
    const index = character.traits.indexOf(name);

    if (index !== -1) {
        character.traits.splice(index, 1);
        updateTraitFlawDisplay();
        return true;
    }

    return false;
}

function removeFlaw(name) {
    const index = character.flaws.indexOf(name);

    if (index !== -1) {
        character.flaws.splice(index, 1);
        updateTraitFlawDisplay();
        return true;
    }

    return false;
}

function updateTraitFlawDisplay() {
    traitList.innerHTML = "";
    flawList.innerHTML = "";

    traitDefinitions.forEach(function(trait) {
        if (isAffiliationTrait(trait.name)) {
            return;
        }

        const row = document.createElement("div");
        row.classList.add("traitFlawRow");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isTraitSelected(trait.name);

        if (character.traits.length >= 5 && !checkbox.checked) {
            checkbox.disabled = true;
        }

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                addTrait(trait.name);
            } else {
                removeTrait(trait.name);
            }

            updateTraitFlawDisplay();
        });

        const label = document.createElement("label");

        const name = document.createElement("strong");
        name.textContent = trait.name;

        const definition = document.createElement("span");
        definition.textContent = trait.definition;

        const effect = document.createElement("span");
        effect.textContent = trait.effect;

        label.appendChild(name);
        label.appendChild(definition);
        label.appendChild(effect);

        row.appendChild(checkbox);
        row.appendChild(label);

        traitList.appendChild(row);
    });

    flawDefinitions.forEach(function(flaw) {
        if (isAffiliationFlaw(flaw.name)) {
            return;
        }

        const row = document.createElement("div");
        row.classList.add("traitFlawRow");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isFlawSelected(flaw.name);

        if (character.flaws.length >= 5 && !checkbox.checked) {
            checkbox.disabled = true;
        }

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                addFlaw(flaw.name);
            } else {
                removeFlaw(flaw.name);
            }

            updateTraitFlawDisplay();
        });

        const label = document.createElement("label");

        const name = document.createElement("strong");
        name.textContent = flaw.name;

        const definition = document.createElement("span");
        definition.textContent = flaw.definition;

        const effect = document.createElement("span");
        effect.textContent = flaw.effect;

        label.appendChild(name);
        label.appendChild(definition);
        label.appendChild(effect);

        row.appendChild(checkbox);
        row.appendChild(label);

        flawList.appendChild(row);
    });

    traitCount.textContent =
        `Traits: ${character.traits.length} / 5`;

    flawCount.textContent =
        `Flaws: ${character.flaws.length} / 5`;

    if (character.affiliationTrait && character.affiliationFlaw) {
        traitFlawAffiliationNote.innerHTML =
            "<em>Includes Affiliation trait and flaw</em>";
    } else {
        traitFlawAffiliationNote.textContent = "";
    }

    if (traitsAndFlawsAreBalanced()) {
        traitFlawBalanceStatus.textContent =
            "Traits and Flaws are balanced.";
    } else {
        traitFlawBalanceStatus.textContent =
            "Trait and Flaw counts must match before the character can be finalized."
    }
}

function traitsAndFlawsAreBalanced() {
    return character.traits.length === character.flaws.length;
}

function getTraitFlawStatus() {
    return {
        traits: character.traits.length,
        flaws: character.flaws.length,
        traitSlotsRemaining: 5 - character.traits.length,
        flawSlotsRemaining: 5 - character.flaws.length,
        balanced: traitsAndFlawsAreBalanced()
    };
}

function isTraitSelected(name) {
    return character.traits.includes(name);
}

function isFlawSelected(name) {
    return character.flaws.includes(name);
}

function isAffiliationTrait(name) {
    return affiliations.some(function(affiliation) {
        return affiliation.trait === name;
    });
}

function isAffiliationFlaw(name) {
    return affiliations.some(function(affiliation) {
        return affiliation.flaw === name;
    });
}

updateTraitFlawDisplay();

// ========================================
// UTILITY FUNCTIONS
// ========================================

function formatStatName(stat) {
    return stat.charAt(0).toUpperCase() + stat.slice(1);
}
