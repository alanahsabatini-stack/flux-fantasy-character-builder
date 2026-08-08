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
    karmaPool: 0,
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
            "Creative Karmastry",
            "Clockwork Karmastry",
            "Bio Karmastry",
            "Machine Karmastry",
            "Quantum Karmastry"
        ]
    },
    {
        name: "Special Agent",
        startingKarma: 20,
        medKitPercent: 100,
        studies: [
            "Scout",
            "Disrupter",
            "Bodyguard",
            "Operative",
            "Tinker"
        ]
    },
    {
        name: "Ink Fighter",
        startingKarma: 20,
        medKitPercent: 50,
        studies: [
            "Melee",
            "Projectile",
            "Animal",
            "Body",
            "Elemental"
        ]
    },
    {
        name: "Clockbot",
        startingKarma: 20,
        medKitPercent: 25,
        studies: [
            "D-Type (Decoy)",
            "K-Type (Karmastry-Assist)",
            "M-Type (Medical)",
            "H-Type (Heavy)",
            "X-Type (Experimental)"
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

function findSpecialty(name) {
    return specialties.find(function(specialty) {
        return specialty.name === name;
    });
}

specialtySelect.addEventListener("change", function() {
    const selectedSpecialty = findSpecialty(specialtySelect.value);

    character.specialty = selectedSpecialty.name;
    character.karmaPool = selectedSpecialty.startingKarma;

    specialtyInfo.innerHTML = `
        <p>Specialty: ${selectedSpecialty.name}</p>
        <p>Starting Karma: ${selectedSpecialty.startingKarma}</p>
        <p>Med Kit: ${selectedSpecialty.medKitPercent}% of HP</p>
    `;

    studySelect.innerHTML = '<option value="">--Select a Study --</option>';

    selectedSpecialty.studies.forEach(function(study) {
        const option = document.createElement("option");
        option.value = study;
        option.textContent = study;
        studySelect.appendChild(option);
    });

    studySelect.disabled = false;
});
