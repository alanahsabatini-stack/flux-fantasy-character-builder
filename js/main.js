console.log("Flux Fantasy Character Builder loaded!")

// ========================================
// CHARACTER DATA
// ========================================

const character = {
    name: "Test Character",
    alias: "The Tester",
    age: 25,
    gender: "Unknown",
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
        medKitPercent: 25
    },
    {
        name: "Special Agent",
        startingKarma: 20,
        medKitPercent: 100
    },
    {
        name: "Ink Fighter",
        startingKarma: 20,
        medKitPercent: 50
    },
    {
        name: "Clockbot",
        startingKarma: 20,
        medKitPercent: 25
    }
];
