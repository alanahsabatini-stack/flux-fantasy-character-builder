// ========================================
// PROJECT: Flux Fantasy Character Builder
// TITLE: JavaScript Main
// PROGRAMMER: Alanah Sabatini
// DATE: 08/08/2026
// LATEST REVISION: 08/15/2026
// ========================================

console.log("Flux Fantasy Character Builder loaded!");

// ========================================
// CHARACTER DATA
// ========================================

const character = {
    name: "",
    alias: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    level: 1,
    background: "",
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
    startingItems: {
        karmaMedKits: 2,
        merits: 20,
        fishbowls: 1,
        specialtyItems: []
    },
    nonKarmaAttacks: {
        basic: [
            {
                name: "",
                damage: 0,
                range: "",
                effect: ""
            },
            {
                name: "",
                damage: 0,
                range: "",
                effect: ""
            },
            {
                name: "",
                damage: 0,
                range: "",
                effect: ""
            }
        ],

        advanced: [
            {
                name: "",
                damage: 0,
                range: "",
                effect: ""
            },
            {
                name: "",
                damage: 0,
                range: "",
                effect: ""
            },
            {
                name: "",
                damage: 0,
                range: "",
                effect: ""
            }
        ]
    },
    powers: {
        basicTier1: {
            attack: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            defense: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            combo: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            signature: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            locomotion: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            }
        },

        basicTier2: {
            attack: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            defense: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            combo: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            signature: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            locomotion: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            }
        },

        advancedTier1: {
            attack: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            defense: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            combo: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            signature: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            locomotion: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            }
        },

        advancedTier2: {
            attack: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            defense: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            combo: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            signature: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            },
            locomotion: {
                name: "",
                description: "",
                kpCost: 0,
                damage: null,
                range: "",
                effect: ""
            }
        }
    },
    traits: [],
    flaws: []
};

// ========================================
// DOM REFERENCES & INITIALIZATION
// ========================================

const playerName = document.getElementById("playerName");

const characterName = document.getElementById("characterName");
const characterAlias = document.getElementById("characterAlias");
const characterAge = document.getElementById("characterAge");
const characterGender = document.getElementById("characterGender");
const characterHeight = document.getElementById("characterHeight");
const characterWeight = document.getElementById("characterWeight");
const characterLevel = document.getElementById("characterLevel");
const characterBackground = document.getElementById("characterBackground");

const summaryName = document.getElementById("summaryName");
const summaryAlias = document.getElementById("summaryAlias");
const summaryLevel = document.getElementById("summaryLevel");
const summarySpecialty = document.getElementById("summarySpecialty");
const summaryStudy = document.getElementById("summaryStudy");
const summaryAffiliation = document.getElementById("summaryAffiliation");
const summaryKarma = document.getElementById("summaryKarma");
const summaryMov = document.getElementById("summaryMov");
const summaryDefense = document.getElementById("summaryDefense");
const summaryAura = document.getElementById("summaryAura");
const summaryStamina = document.getElementById("summaryStamina");
const summaryAgility = document.getElementById("summaryAgility");
const summaryWillpower = document.getElementById("summaryWillpower");
const summaryFunction = document.getElementById("summaryFunction");
const summaryTechnique = document.getElementById("summaryTechnique");
const summaryAttackName = document.getElementById("summaryAttackName");
const summaryDefenseName = document.getElementById("summaryDefenseName");
const summaryComboName = document.getElementById("summaryComboName");
const summarySignatureName = document.getElementById("summarySignatureName");
const summaryLocomotionName = document.getElementById("summaryLocomotionName");
const summaryTraits = document.getElementById("summaryTraits");
const summaryFlaws = document.getElementById("summaryFlaws");

const specialtySelect = document.getElementById("specialtySelect");
const specialtyInfo = document.getElementById("specialtyInfo");

const studySelect = document.getElementById("studySelect");
const studyInfo = document.getElementById("studyInfo");

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

const startingItems = document.getElementById("startingItems");
const startingMedKits = document.getElementById("startingMedKits");
const startingMerits = document.getElementById("startingMerits");
const startingFishbowl = document.getElementById("startingFishbowl");
const specialtyItemDisplay = document.getElementById("specialtyItemDisplay");

const traitList = document.getElementById("traitList");
const flawList = document.getElementById("flawList");

const traitCount = document.getElementById("traitCount");
const flawCount = document.getElementById("flawCount");

const traitFlawAffiliationNote = document.getElementById("traitFlawAffiliationNote");
const traitFlawBalanceStatus = document.getElementById("traitFlawBalanceStatus");

// ========================================
// INFO PANEL FUNCTIONS
// ========================================

const infoToggles = document.querySelectorAll(".infoToggle");

infoToggles.forEach(function(toggle) {
    toggle.addEventListener("click", function() {
        const panel = toggle.parentElement;
        panel.classList.toggle("open");
    });
});

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
        summary: "Escape Artists are known for their ability to manipulate the universe's forces with karmastry to create stunning, immediate effects.",
        startingKarma: 25,
        medKitPercent: 25,
        advantage: "can replenish 10 KP when completely depleted in battle.",
        studies: [
            {
                name: "Creative Karmastry",
                summary: "Creative Karmastry Escape Artists are the dreamers and visionaries, turning their imaginative ideas into reality within the real world and especially inside flux destinies.",
                stat: "technique",
                modifier: 1
            },
            {
                name: "Clockwork Karmastry",
                summary: "Clockwork Karmastry Escape Artists are engineers with a deep understanding of matter, energy, and mechanics. Their creations are meticulously designed, ensuring that every mechanism operates with precision.",
                stat: "agility",
                modifier: 1
            },
            {
                name: "Bio Karmastry",
                summary: "Bio Karmastry Escape Artists focus on natural and biological processes and elements. Their skills extend to both real and imagined life forms, making them the caretakers and creators of life.",
                stat: "function",
                modifier: 1
            },
            {
                name: "Machine Karmastry",
                summary: "Machine Karmastry Escape Artists are the tech specialists, using karmastry to design, power, and control advanced machinery. Their expertise lies in creating and maintaining complex machines.",
                stat: "stamina",
                modifier: 1
            },
            {
                name: "Quantum Karmastry",
                summary: "Quantum Karmastry Escape Artists push the boundaries and bend the rules of reality. Their powers are as unpredictable as they are powerful, making Quantum Karmastry a thrilling but dangerous path.",
                stat: "willpower",
                modifier: 1
            }
        ]
    },
    {
        name: "Special Agent",
        summary: "Special Agents are the guardians of karmic law. Their high-tech gear and secretive methods make them formidable opponents.",
        startingKarma: 20,
        medKitPercent: 100,
        advantage: "receive 10% of current Merit balance as a government-approved bonus and an extra Med Kit after each Checkpoint.",
        studies: [
            {
                name: "Scout",
                summary: "Scouts are the silent hunters of the Special Agents, experts in surveillance and recon. They slip through shadows, tracking enemy movements and gathering intel without ever being noticed.",
                stat: "agility",
                modifier: 1
            },
            {    
                name: "Disrupter",
                summary: "Disrupters are the wrecking balls of the Special Agents, armed with the most devastating karma-tech weapons. Built for destruction, they tear through enemy defenses and throw everything into chaos.",
                stat: "willpower",
                modifier: 1
            },
            {
                name: "Bodyguard",
                summary: "Always on the front lines, Bodyguards shield their team from harm, acting as both protector and battering ram. Using karma-powered exoskeletons or reinforced bracers, they enhance their strength and durability, making them powerhouses in close combat.",
                stat: "stamina",
                modifier: 1
            },
            {
                name: "Operative",
                summary: "Operative Special Agents are sharp, tactical, and always in control. Masters of planning and coordination, many hold top leadership roles.",
                stat: "aura",
                modifier: 1
            },
            {
                name: "Tinker",
                summary: "Tinkers are the tech wizards of the Special Agents, masters of karma-powered gadgets and improvisation. Whether hacking into secure systems, cracking open locked doors, or tweaking gear mid-mission, they turn problems into opportunities.",
                stat: "technique",
                modifier: 1
            }
        ]
    },
    {
        name: "Ink Fighter",
        summary: "Ink Fighters are martial artists who wield karma-infused tattoos called sigils to gain extraordinary combat abilities. Sigils must be recharged with karma as they fade with use.",
        startingKarma: 20,
        medKitPercent: 50,
        advantage: "can trade Movement for an extra Action in combat.",
        studies: [
            {
                name: "Melee",
                summary: "Melee is a common form of Ink fighting used mostly by older Ink Fighters. These fighters have sigils of swords, bats, spears, war hammers, and knives.",
                stat: "aura",
                modifier: 1
            },
            {
                name: "Projectile",
                summary: "Masters of ranged combat, Projectile Ink Fighters take combat to a whole new level with sigils that launch cannons, guns, rockets, throwing knives, lasers, and grenades.",
                stat: "technique",
                modifier: 1
            },
            {
                name: "Animal",
                summary: "Animal Ink Fighters summon creatures or transform parts of their bodies into animal forms. These sigils can be volatile, sometimes turning on their owners. This new and dangerous Study has gained popularity among younger Ink Fighters.",
                stat: "agility",
                modifier: 1
            },
            {
                name: "Body",
                summary: "Body-enhancing sigils are the oldest and most revered form of Ink Fighting. Using these sigils, fighters enhance their physical abilities, gaining incredible strength, martial arts skills, longer teeth, or tougher skin.",
                stat: "function",
                modifier: 1
            },
            {
                name: "Elemental",
                summary: "Elemental Ink Fighters wield the forces of nature through their sigils, such as lightning bolts, fire blasts, or torrents of water. This is the most dangerous Study, demanding a high amount of karma and often being short-lived but devastatingly powerful.",
                stat: "willpower",
                modifier: 1
            }
        ]
    },
    {
        name: "Clockbot",
        summary: "Clockbots are highly advanced robots powered by karmastry instead of electricity, allowing them to interact directly with destiny itself. Originally built for military use, they are now a core part of everyday life and handle everything from public service and medical assistance to industrial work.",
        startingKarma: 20,
        medKitPercent: 25,
        advantage: "can absorb 50% of payback and karma-based weapon attacks without taking damage, halving all potential damage.",
        studies: [
            {
                name: "D-Type (Decoy)",
                summary: "D-Type Clockbots are the battlefield shields, built to draw enemy fire, absorb damage, and serve as frontline protectors against payback.",
                stat: "stamina",
                modifier: 1
            },
            {
                name: "K-Type (Karmastry-Assist)",
                summary: "K-Type Clockbots are the ultimate support units, built to back up Escape Artists in their most complex karmastry feats. More than just assistants, these Clockbots help manage raging payback, stabilize flux destinies, and keep the flow of karma running smoothly.",
                stat: "willpower",
                modifier: 1
            },
            {
                name: "M-Type (Medical)",
                summary: "Equipped with advanced medical tools and karma-infused healing abilities, M-Types provide emergency treatment, stabilize injuries, and restore HP when it matters most.",
                stat: "function",
                modifier: 1
            },
            {
                name: "H-Type (Heavy)",
                summary: "H-Type Clockbots are heavily armored and incredibly strong. They are designed to withstand and deliver heavy damage, making them formidable opponents in any battle scenario.",
                stat: "agility",
                modifier: 1
            },
            {
                name: "X-Type (Experimental)",
                summary: "X-Type Clockbots are built in secrecy by military research labs. These rare machines are capable of performing Quantum Karmastry, making them some of the most unpredictable and powerful Clockbots ever created.",
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
// KARMA POWER DEFINITIONS
// ========================================

const studyPowerDefinitions = [
    {   // Escape Artist: Creative
        study: "Creative Karmastry",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "1",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "1-2",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 10,
                damage: 8,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 10,
                range: "1",
                effect: "-"
            },
            signature: {
                kpCost: 20,
                damage: 12,
                range: "1-2",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 15,
                damage: 14,
                range: "0-3",
                effect: "Add +2 to Quick Action rolls. This ability can stack. Resets when you are attacked."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 16,
                range: "1-2",
                effect: "Add +2 to Quick Action rolls. This ability can stack. Resets when you are attacked."
            },
            signature: {
                kpCost: 25,
                damage: 18,
                range: "0-2",
                effect: "Add +2 to Quick Action rolls. This ability can stack. Resets when you are attacked."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 30,
                damage: 28,
                range: "0-3",
                effect: "Add +5 to Quick Action rolls. This ability can stack. Resets when you are attacked."
            },
            defense: {
                kpCost: 30,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 38,
                damage: 32,
                range: "1-2",
                effect: "Add +5 to Quick Action rolls. This ability can stack. Resets when you are attacked."
            },
            signature: {
                kpCost: 50,
                damage: 36,
                range: "0-2",
                effect: "Add +5 to Quick Action rolls. This ability can stack. Resets when you are attacked."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Escape Artist: Clockwork
        study: "Clockwork Karmastry",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "1-2",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+1 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 7,
                range: "0-1",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 10,
                damage: 8,
                range: "1-2",
                effect: "-"
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 10,
                range: "2",
                effect: "-"
            },
            signature: {
                kpCost: 20,
                damage: 14,
                range: "0-1",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 15,
                damage: 14,
                range: "1-3",
                effect: "After each attack, increase its range by +1. Resets after being hit."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 16,
                range: "1-2",
                effect: "After each attack, increase its range by +1. Resets after being hit."
            },
            signature: {
                kpCost: 25,
                damage: 20,
                range: "0-1",
                effect: "After each attack, increase its range by +1. Resets after being hit."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 30,
                damage: 28,
                range: "1-3",
                effect: "After each attack, increase its range by +2. Resets after being hit."
            },
            defense: {
                kpCost: 30,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 38,
                damage: 32,
                range: "1-2",
                effect: "After each attack, increase its range by +2. Resets after being hit."
            },
            signature: {
                kpCost: 50,
                damage: 40,
                range: "0-1",
                effect: "After each attack, increase its range by +2. Resets after being hit."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Escape Artist: Bio
        study: "Bio Karmastry",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 3,
                range: "1-3",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 5,
                range: "0-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 10,
                damage: 6,
                range: "1-3",
                effect: "Each attack restores +2 HP (up to cap)."
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 8,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 20,
                damage: 10,
                range: "0-3",
                effect: "Each attack restores +2 HP (up to cap)."
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 15,
                damage: 12,
                range: "1-4",
                effect: "Each attack heals you or a teammate for +5 HP (up to cap)."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 14,
                range: "1-3",
                effect: "Each attack heals you or a teammate for +5 HP (up to cap)."
            },
            signature: {
                kpCost: 25,
                damage: 16,
                range: "0-4",
                effect: "Each attack heals you or a teammate for +5 HP (up to cap)."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 30,
                damage: 24,
                range: "1-4",
                effect: "Each attack heals you or a teammate for +8 HP (up to cap)."
            },
            defense: {
                kpCost: 30,
                damage: null,
                range: "-",
                effect: "+7 to DEF on next turn."
            },
            combo: {
                kpCost: 38,
                damage: 32,
                range: "1-3",
                effect: "Each attack heals you or a teammate for +8 HP (up to cap)."
            },
            signature: {
                kpCost: 50,
                damage: 38,
                range: "0-4",
                effect: "Each attack heals you or a teammate for +8 HP (up to cap)."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Escape Artist: Machine
        study: "Machine Karmastry",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 3,
                range: "3-4",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 3,
                range: "2-4",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 4,
                range: "0-4",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 10,
                damage: 6,
                range: "3-4",
                effect: "-"
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 6,
                range: "2-4",
                effect: "-"
            },
            signature: {
                kpCost: 20,
                damage: 8,
                range: "0-4",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 15,
                damage: 12,
                range: "2-4",
                effect: "After each attack, transfer 10 PBP to a nearby Clockbot or 5 to any nearby machine if none are present."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 12,
                range: "1-4",
                effect: "After each attack, transfer 10 PBP to a nearby Clockbot or 5 to any nearby machine if none are present."
            },
            signature: {
                kpCost: 25,
                damage: 16,
                range: "0-5",
                effect: "After each attack, transfer 10 PBP to a nearby Clockbot or 5 to any nearby machine if none are present."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 30,
                damage: 24,
                range: "2-4",
                effect: "After each attack, transfer 20 PBP to a nearby Clockbot or 10 to any nearby machine if none are present."
            },
            defense: {
                kpCost: 30,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 38,
                damage: 24,
                range: "1-4",
                effect: "After each attack, transfer 20 PBP to a nearby Clockbot or 10 to any nearby machine if none are present."
            },
            signature: {
                kpCost: 50,
                damage: 32,
                range: "0-5",
                effect: "After each attack, transfer 20 PBP to a nearby Clockbot or 10 to any nearby machine if none are present."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Escape Artist: Quantum
        study: "Quantum Karmastry",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 5,
                range: "1",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+1 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 7,
                range: "0",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 10,
                damage: 10,
                range: "1",
                effect: "-"
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 10,
                range: "2",
                effect: "-"
            },
            signature: {
                kpCost: 20,
                damage: 14,
                range: "0",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 15,
                damage: 16,
                range: "1-2",
                effect: "After each attack, teleport to a square next to an ally."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 16,
                range: "1-2",
                effect: "After each attack, teleport to a square next to an ally."
            },
            signature: {
                kpCost: 25,
                damage: 20,
                range: "0-1",
                effect: "After each attack, teleport to a square next to an ally."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 30,
                damage: 32,
                range: "1-2",
                effect: "After each attack, teleport to a square next to an ally or enemy."
            },
            defense: {
                kpCost: 30,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 38,
                damage: 32,
                range: "1-2",
                effect: "After each attack, teleport to a square next to an ally or enemy."
            },
            signature: {
                kpCost: 50,
                damage: 40,
                range: "0-1",
                effect: "After each attack, teleport to a square next to an ally or enemy."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Ink Fighter: Melee
        study: "Melee",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "0-1",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "3",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "2-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 7,
                damage: 8,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 9,
                damage: 9,
                range: "2-3",
                effect: "-"
            },
            signature: {
                kpCost: 13,
                damage: 10,
                range: "1-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 10,
                damage: 13,
                range: "0-3",
                effect: "Keep your weapon summoned for 1 turn, and attack without using KP."
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 12,
                damage: 14,
                range: "0-3",
                effect: "Keep your weapon summoned for 1 turn, and attack without using KP."
            },
            signature: {
                kpCost: 16,
                damage: 15,
                range: "1-4",
                effect: "Keep your weapon summoned for 1 turn, and attack without using KP."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 15,
                damage: 19,
                range: "0-4",
                effect: "Keep your weapon summoned for 2 turns, and attack without using KP."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 20,
                range: "0-4",
                effect: "Keep your weapon summoned for 2 turns, and attack without using KP."
            },
            signature: {
                kpCost: 21,
                damage: 21,
                range: "1-5",
                effect: "Keep your weapon summoned for 2 turns, and attack without using KP."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Ink Fighter: Projectile
        study: "Projectile",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 3,
                range: "3-4",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "4",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "1-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 7,
                damage: 7,
                range: "3-5",
                effect: "-"
            },
            defense: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 9,
                damage: 8,
                range: "3-4",
                effect: "-"
            },
            signature: {
                kpCost: 13,
                damage: 10,
                range: "1-6",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 10,
                damage: 12,
                range: "2-5",
                effect: "Your attack also hits a second enemy for 1/2 damage."
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 12,
                damage: 13,
                range: "3-5",
                effect: "Your attack also hits a second enemy for 1/2 damage."
            },
            signature: {
                kpCost: 16,
                damage: 15,
                range: "1-7",
                effect: "Your attack also hits a second enemy for 1/2 damage."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 15,
                damage: 18,
                range: "2-6",
                effect: "Your attack also hits two enemies for 1/2 damage."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 19,
                range: "3-6",
                effect: "Your attack also hits two enemies for 1/2 damage."
            },
            signature: {
                kpCost: 21,
                damage: 21,
                range: "1-8",
                effect: "Your attack also hits two enemies for 1/2 damage."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Ink Fighter: Animal
        study: "Animal",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "2-4",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "4",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 5,
                range: "1-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 7,
                damage: 8,
                range: "1-4",
                effect: "-"
            },
            defense: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 9,
                damage: 8,
                range: "3-4",
                effect: "-"
            },
            signature: {
                kpCost: 13,
                damage: 9,
                range: "1-6",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 10,
                damage: 13,
                range: "0-4",
                effect: "Keep your Power summoned for 1 turn, and attack without using KP."
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+5 DEF on next turn."
            },
            combo: {
                kpCost: 12,
                damage: 13,
                range: "3-5",
                effect: "Keep your Power summoned for 1 turn, and attack without using KP."
            },
            signature: {
                kpCost: 16,
                damage: 14,
                range: "0-6",
                effect: "Keep your Power summoned for 1 turn, and attack without using KP."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 15,
                damage: 19,
                range: "0-5",
                effect: "Keep your power summoned for 2 turns, and attack without using KP."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 19,
                range: "2-5",
                effect: "Keep your power summoned for 2 turns, and attack without using KP."
            },
            signature: {
                kpCost: 21,
                damage: 20,
                range: "0-7",
                effect: "Keep your power summoned for 2 turns, and attack without using KP."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Ink Fighter: Body
        study: "Body",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "0-3",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "1-2",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 5,
                damage: 8,
                range: "0-3",
                effect: "Each attack heals +3 HP (up to cap)."
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 8,
                range: "0-4",
                effect: "Each attack heals +3 HP (up to cap)."
            },
            signature: {
                kpCost: 10,
                damage: 10,
                range: "1-3",
                effect: "Each attack heals +3 HP (up to cap)."
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 10,
                damage: 13,
                range: "0-4",
                effect: "Add +2 to your HP. This ability can stack. Resets after the battle."
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 12,
                damage: 13,
                range: "3-5",
                effect: "Add +2 to your HP. This ability can stack. Resets after the battle."
            },
            signature: {
                kpCost: 16,
                damage: 15,
                range: "0-6",
                effect: "Add +2 to your HP. This ability can stack. Resets after the battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 15,
                damage: 19,
                range: "0-5",
                effect: "Add +4 to your HP. This ability can stack. Resets after the battle."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+7 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 19,
                range: "2-5",
                effect: "Add +4 to your HP. This ability can stack. Resets after the battle."
            },
            signature: {
                kpCost: 21,
                damage: 21,
                range: "0-7",
                effect: "Add +4 to your HP. This ability can stack. Resets after the battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Ink Fighter: Elemental
        study: "Elemental",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 5,
                range: "0-1",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+1 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "0-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "1-4",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 7,
                damage: 9,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 9,
                damage: 9,
                range: "0-3",
                effect: "-"
            },
            signature: {
                kpCost: 13,
                damage: 10,
                range: "1-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 10,
                damage: 15,
                range: "0-3",
                effect: "Gain +2 KP per attack (up to cap). Stacks but resets when hit."
            },
            defense: {
                kpCost: 10,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 12,
                damage: 15,
                range: "0-4",
                effect: "Gain +2 KP per attack (up to cap). Stacks but resets when hit."
            },
            signature: {
                kpCost: 16,
                damage: 16,
                range: "1-6",
                effect: "Gain +2 KP per attack (up to cap). Stacks but resets when hit."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 15,
                damage: 15,
                range: "0-4",
                effect: "Gain +4 KP per attack (up to cap). Stacks but resets when hit."
            },
            defense: {
                kpCost: 15,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 15,
                range: "0-5",
                effect: "Gain +4 KP per attack (up to cap). Stacks but resets when hit."
            },
            signature: {
                kpCost: 21,
                damage: 16,
                range: "0-6",
                effect: "Gain +4 KP per attack (up to cap). Stacks but resets when hit."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Special Agent: Scout
        study: "Scout",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "2-3",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 4,
                range: "0-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 8,
                damage: 7,
                range: "1-3",
                effect: "-"
            },
            defense: {
                kpCost: 8,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 10,
                damage: 8,
                range: "1-3",
                effect: "-"
            },
            signature: {
                kpCost: 14,
                damage: 7,
                range: "0-6",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 12,
                damage: 11,
                range: "0-3",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 12,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 12,
                range: "1-4",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 18,
                damage: 11,
                range: "0-7",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 17,
                damage: 16,
                range: "0-4",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 17,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 17,
                range: "1-5",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 22,
                damage: 16,
                range: "0-8",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Special Agent: Disrupter
        study: "Disrupter",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 5,
                range: "1-2",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "1-4",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "0-2",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 8,
                damage: 8,
                range: "1-3",
                effect: "-"
            },
            defense: {
                kpCost: 8,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 10,
                damage: 8,
                range: "0-4",
                effect: "-"
            },
            signature: {
                kpCost: 14,
                damage: 9,
                range: "0-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 12,
                damage: 12,
                range: "1-4",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 12,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 12,
                range: "0-5",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 18,
                damage: 11,
                range: "0-4",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 17,
                damage: 17,
                range: "1-5",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 17,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 17,
                range: "0-6",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 22,
                damage: 16,
                range: "0-5",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Special Agent: Bodyguard
        study: "Bodyguard",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "0-1",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "1-3",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 7,
                range: "0-4",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 8,
                damage: 7,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 8,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 10,
                damage: 7,
                range: "1-4",
                effect: "-"
            },
            signature: {
                kpCost: 14,
                damage: 10,
                range: "0-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 12,
                damage: 11,
                range: "0-3",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 12,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 11,
                range: "0-4",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 18,
                damage: 14,
                range: "0-6",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 17,
                damage: 16,
                range: "0-4",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 17,
                damage: null,
                range: "-",
                effect: "+7 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 16,
                range: "0-5",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 22,
                damage: 19,
                range: "0-7",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Special Agent: Operative
        study: "Operative",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 3,
                range: "0-5",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "4-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 8,
                damage: 8,
                range: "0-6",
                effect: "-"
            },
            defense: {
                kpCost: 8,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 10,
                damage: 8,
                range: "1-3",
                effect: "-"
            },
            signature: {
                kpCost: 14,
                damage: 9,
                range: "3-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 12,
                damage: 12,
                range: "0-7",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 12,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn.",
            },
            combo: {
                kpCost: 14,
                damage: 12,
                range: "1-4",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 18,
                damage: 13,
                range: "3-6",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 17,
                damage: 17,
                range: "0-8",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 17,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 17,
                range: "1-5",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 22,
                damage: 18,
                range: "2-6",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Special Agent: Tinker
        study: "Tinker",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "0-4",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+1 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 7,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "3-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 8,
                damage: 7,
                range: "0-5",
                effect: "-"
            },
            defense: {
                kpCost: 8,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 10,
                damage: 10,
                range: "1-3",
                effect: "-"
            },
            signature: {
                kpCost: 14,
                damage: 9,
                range: "2-5",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 12,
                damage: 12,
                range: "0-6",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 12,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 14,
                damage: 14,
                range: "1-4",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 18,
                damage: 13,
                range: "2-6",
                effect: "+1 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 17,
                damage: 17,
                range: "0-7",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            defense: {
                kpCost: 17,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 19,
                damage: 19,
                range: "1-5",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            signature: {
                kpCost: 22,
                damage: 18,
                range: "1-6",
                effect: "+2 damage to all attacks per attack made. Stacks each time and resets after battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Clockbot: D-Type (Decoy)
        study: "D-Type (Decoy)",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 3,
                range: "2-3",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "0-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 5,
                range: "1-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 9,
                damage: 7,
                range: "2-3",
                effect: "-"
            },
            defense: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 11,
                damage: 8,
                range: "0-2",
                effect: "-"
            },
            signature: {
                kpCost: 15,
                damage: 9,
                range: "1-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 14,
                damage: 14,
                range: "1-3",
                effect: "Create a decoy bot that absorbs 25% of the next incoming damage."
            },
            defense: {
                kpCost: 14,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 16,
                range: "0-3",
                effect: "Create a decoy bot that absorbs 25% of the next incoming damage."
            },
            signature: {
                kpCost: 22,
                damage: 18,
                range: "1-4",
                effect: "Create a decoy bot that absorbs 25% of the next incoming damage."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 22,
                damage: 21,
                range: "1-3",
                effect: "Create a decoy bot that absorbs 50% of the next incoming damage."
            },
            defense: {
                kpCost: 22,
                damage: null,
                range: "-",
                effect: "+7 to DEF on next turn."
            },
            combo: {
                kpCost: 25,
                damage: 23,
                range: "0-3",
                effect: "Create a decoy bot that absorbs 50% of the next incoming damage."
            },
            signature: {
                kpCost: 30,
                damage: 25,
                range: "1-4",
                effect: "Create a decoy bot that absorbs 50% of the next incoming damage."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Clockbot: K-Type (Karmastry-Assist)
        study: "K-Type (Karmastry-Assist)",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 5,
                range: "1-2",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "0-5",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "0-1",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 9,
                damage: 9,
                range: "1-2",
                effect: "-"
            },
            defense: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 11,
                damage: 8,
                range: "0-5",
                effect: "-"
            },
            signature: {
                kpCost: 15,
                damage: 10,
                range: "0-1",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 14,
                damage: 18,
                range: "1-3",
                effect: "Reduce KP cost by 1 per attack. Resets at the end of battle."
            },
            defense: {
                kpCost: 14,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 16,
                range: "0-6",
                effect: "Reduce KP cost by 1 per attack. Resets at the end of battle."
            },
            signature: {
                kpCost: 22,
                damage: 20,
                range: "0-2",
                effect: "Reduce KP cost by 1 per attack. Resets at the end of battle."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 22,
                damage: 25,
                range: "1-3",
                effect: "Reduce KP cost by 2 per attack. Resets at the end of battle."
            },
            defense: {
                kpCost: 22,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 25,
                damage: 23,
                range: "0-6",
                effect: "Reduce KP cost by 2 per attack. Resets at the end of battle."
            },
            signature: {
                kpCost: 30,
                damage: 27,
                range: "0-2",
                effect: "Reduce KP cost by 2 per attack. Resets at the end of battle."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Clockbot: M-Type (Medical)
        study: "M-Type (Medical)",
        
        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 3,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 4,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 5,
                range: "2-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 9,
                damage: 7,
                range: "0-2",
                effect: "-"
            },
            defense: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 11,
                damage: 8,
                range: "1-2",
                effect: "-"
            },
            signature: {
                kpCost: 15,
                damage: 9,
                range: "2-3",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 14,
                damage: 14,
                range: "0-3",
                effect: "Each attack heals you or a teammate for 5 HP (up to cap)."
            },
            defense: {
                kpCost: 14,
                damage: null,
                range: "-",
                effect: "+7 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 16,
                range: "1-3",
                effect: "Each attack heals you or a teammate for 5 HP (up to cap)."
            },
            signature: {
                kpCost: 22,
                damage: 18,
                range: "1-3",
                effect: "Each attack heals you or a teammate for 5 HP (up to cap)."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 22,
                damage: 21,
                range: "0-3",
                effect: "Each attack heals you or a teammate for 8 HP (up to cap)."
            },
            defense: {
                kpCost: 22,
                damage: null,
                range: "-",
                effect: "+8 to DEF on next turn."
            },
            combo: {
                kpCost: 25,
                damage: 23,
                range: "1-3",
                effect: "Each attack heals you or a teammate for 8 HP (up to cap)."
            },
            signature: {
                kpCost: 30,
                damage: 25,
                range: "1-3",
                effect: "Each attack heals you or a teammate for 8 HP (up to cap)."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Clockbot: H-Type (Heavy)
        study: "H-Type (Heavy)",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 5,
                range: "0-1",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "1-3",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 6,
                range: "2-4",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 9,
                damage: 9,
                range: "0-1",
                effect: "-"
            },
            defense: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 11,
                damage: 9,
                range: "1-3",
                effect: "-"
            },
            signature: {
                kpCost: 15,
                damage: 10,
                range: "2-4",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 14,
                damage: 18,
                range: "0-2",
                effect: "Gain +1 DEF for every attack. Stacks until you're hit, then resets."
            },
            defense: {
                kpCost: 14,
                damage: null,
                range: "-",
                effect: "+5 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 18,
                range: "1-4",
                effect: "Gain +1 DEF for every attack. Stacks until you're hit, then resets."
            },
            signature: {
                kpCost: 22,
                damage: 20,
                range: "1-4",
                effect: "Gain +1 DEF for every attack. Stacks until you're hit, then resets."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 22,
                damage: 25,
                range: "0-2",
                effect: "Gain +2 DEF for every attack. Stacks until you're hit, then resets."
            },
            defense: {
                kpCost: 22,
                damage: null,
                range: "-",
                effect: "+6 to DEF on next turn."
            },
            combo: {
                kpCost: 25,
                damage: 25,
                range: "1-4",
                effect: "Gain +2 DEF for every attack. Stacks until you're hit, then resets."
            },
            signature: {
                kpCost: 30,
                damage: 27,
                range: "1-4",
                effect: "Gain +2 DEF for every attack. Stacks until you're hit, then resets."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    },
    {   // Clockbot: X-Type (Experimental)
        study: "X-Type (Experimental)",

        basicTier1: {
            attack: {
                kpCost: 5,
                damage: 4,
                range: "1-3",
                effect: "-"
            },
            defense: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+1 to DEF on next turn."
            },
            combo: {
                kpCost: 7,
                damage: 5,
                range: "0-1",
                effect: "-"
            },
            signature: {
                kpCost: 10,
                damage: 8,
                range: "3-6",
                effect: "-"
            },
            locomotion: {
                kpCost: 3,
                damage: null,
                range: "-",
                effect: "+1 MOV"
            }
        },

        basicTier2: {
            attack: {
                kpCost: 9,
                damage: 8,
                range: "1-3",
                effect: "-"
            },
            defense: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+2 to DEF on next turn."
            },
            combo: {
                kpCost: 11,
                damage: 9,
                range: "0-1",
                effect: "-"
            },
            signature: {
                kpCost: 15,
                damage: 12,
                range: "3-6",
                effect: "-"
            },
            locomotion: {
                kpCost: 5,
                damage: null,
                range: "-",
                effect: "+2 MOV"
            }
        },

        advancedTier1: {
            attack: {
                kpCost: 14,
                damage: 16,
                range: "1-4",
                effect: "Each attack reduces a selected enemy's damage by 1. Stacks until you're hit, then resets."
            },
            defense: {
                kpCost: 14,
                damage: null,
                range: "-",
                effect: "+3 to DEF on next turn."
            },
            combo: {
                kpCost: 17,
                damage: 18,
                range: "0-2",
                effect: "Each attack reduces a selected enemy's damage by 1. Stacks until you're hit, then resets."
            },
            signature: {
                kpCost: 22,
                damage: 24,
                range: "2-6",
                effect: "Each attack reduces a selected enemy's damage by 1. Stacks until you're hit, then resets."
            },
            locomotion: {
                kpCost: 7,
                damage: null,
                range: "-",
                effect: "+3 MOV"
            }
        },

        advancedTier2: {
            attack: {
                kpCost: 22,
                damage: 23,
                range: "1-4",
                effect: "Each attack reduces a selected enemy's damage by 2. Stacks until you're hit, then resets."
            },
            defense: {
                kpCost: 22,
                damage: null,
                range: "-",
                effect: "+4 to DEF on next turn."
            },
            combo: {
                kpCost: 25,
                damage: 25,
                range: "0-2",
                effect: "Each attack reduces a selected enemy's damage by 2. Stacks until you're hit, then resets."
            },
            signature: {
                kpCost: 30,
                damage: 31,
                range: "2-6",
                effect: "Each attack reduces a selected enemy's damage by 2. Stacks until you're hit, then resets."
            },
            locomotion: {
                kpCost: 9,
                damage: null,
                range: "-",
                effect: "+4 MOV"
            }
        }
    }
];

// ========================================
// NON-KARMA ATTACK DEFINITIONS
// ========================================

const nonKarmaAttackDefinitions = [
    {
        specialty: "Escape Artist",

        basic: [
            {
                exampleName: "Punch",
                damage: 3,
                range: "1",
                effect: "-"
            },
            {
                exampleName: "Running Kick",
                damage: 2,
                range: "2",
                effect: "-"
            },
            {
                exampleName: "Bite",
                damage: 4,
                range: "0",
                effect: "-"
            }
        ],

        advanced: [
            {
                exampleName: "Torus Smash",
                damage: 7,
                range: "0-4",
                effect: "+5 KP restored"
            },
            {
                exampleName: "Backhand",
                damage: 9,
                range: "1-2",
                effect: "+5 KP restored"
            },
            {
                exampleName: "Stomp",
                damage: 10,
                range: "0-1",
                effect: "+5 KP restored"
            }
        ]
    },
    {
        specialty: "Ink Fighter",

        basic: [
            {
                exampleName: "Chop",
                damage: 5,
                range: "1",
                effect: "-"
            },
            {
                exampleName: "Round House",
                damage: 4,
                range: "3",
                effect: "-"
            },
            {
                exampleName: "Uppercut",
                damage: 6,
                range: "0",
                effect: "-"
            }
        ],

        advanced: [
            {
                exampleName: "Arm Slice",
                damage: 12,
                range: "1-2",
                effect: "-"
            },
            {
                exampleName: "Jab",
                damage: 14,
                range: "1-3",
                effect: "-"
            },
            {
                exampleName: "Grapple",
                damage: 15,
                range: "0",
                effect: "-"
            }
        ]
    },
    {
        specialty: "Special Agent",

        basic: [
            {
                exampleName: "Baton",
                damage: 4,
                range: "1-2",
                effect: "-"
            },
            {
                exampleName: "Net Trap",
                damage: 5,
                range: "0-1",
                effect: "-"
            },
            {
                exampleName: "Taser",
                damage: 6,
                range: "0",
                effect: "-"
            }
        ],

        advanced: [
            {
                exampleName: "Mini Grenade",
                damage: 8,
                range: "0-2",
                effect: "Reduces the Perception Threshold of enemy target by 2."
            },
            {
                exampleName: "Self Defense",
                damage: 10,
                range: "0-1",
                effect: "Reduces the Perception Threshold of enemy target by 2."
            },
            {
                exampleName: "Poison Dart",
                damage: 12,
                range: "1-3",
                effect: "Reduces the Perception Threshold of enemy target by 2."
            }
        ]
    },
    {
        specialty: "Clockbot",

        basic: [
            {
                exampleName: "Pound",
                damage: 3,
                range: "1-2",
                effect: "-"
            },
            {
                exampleName: "Metal Fist",
                damage: 4,
                range: "0-1",
                effect: "-"
            },
            {
                exampleName: "Shoulder Check",
                damage: 5,
                range: "0",
                effect: "-"
            }
        ],

        advanced: [
            {
                exampleName: "ZAP!",
                damage: 11,
                range: "0-2",
                effect: "+2 damage to humans"
            },
            {
                exampleName: "Sharp Metal",
                damage: 10,
                range: "0-3",
                effect: "+2 damage to humans"
            },
            {
                exampleName: "Body Slam",
                damage: 12,
                range: "0-1",
                effect: "+2 damage to humans"
            }
        ]
    } 
]

// ========================================
// IDENTITY FUNCTIONS
// ========================================

characterName.addEventListener("input", function() {
    character.name = characterName.value;
    summaryName.textContent = character.name;
});

characterAlias.addEventListener("input", function() {
    character.alias = characterAlias.value;
    summaryAlias.textContent = character.alias;
});

characterAge.addEventListener("input", function() {
    character.age = characterAge.value;
});

characterGender.addEventListener("input", function() {
    character.gender = characterGender.value;
});

characterHeight.addEventListener("input", function() {
    character.height = characterHeight.value;
});

characterWeight.addEventListener("input", function() {
    character.weight = characterWeight.value;
});

characterLevel.addEventListener("input", function() {
    character.level = Number(characterLevel.value);
    summaryLevel.textContent = character.level;
});

characterBackground.addEventListener("input", function() {
    character.background = characterBackground.value;
});

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
    summaryKarma.textContent = character.karmaPool;

    calculateStartingItems();
    updateStartingItemsDisplay();

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
    summaryDefense.textContent = character.defense;
    affiliationName.value = "";
    affiliationDescription.value = "";
    character.traits = [];
    character.flaws = [];

    resetNonKarmaAttacks();
    populateNonKarmaAttacks();
    displayAllNonKarmaAttacks();

    resetPowers();
    displayAllPowers();

    updateTraitFlawDisplay();

    calculateTalents();
    calculateDerivedStats();
    summaryStudy.textContent = "Not Selected";
    summaryAffiliation.textContent = "Not Selected";
    studyEffect.textContent = "Study Effect: None";
    
    summarySpecialty.textContent = character.specialty;

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

    console.log("Updating powers for:", character.study);
    populatePowerDefinitions();
    console.log(character.powers.basicTier1.attack);
    displayAllPowers();

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
    summaryDefense.textContent = character.defense;
    character.affiliationTrait = selectedAffiliation.trait;
    character.affiliationFlaw = selectedAffiliation.flaw;
    character.traits = [selectedAffiliation.trait];
    character.flaws = [selectedAffiliation.flaw];

    updateTraitFlawDisplay();

    affiliationName.value = selectedAffiliation.name;
    affiliationDescription.value = selectedAffiliation.description;

    character.affiliationName = selectedAffiliation.name;
    character.affiliationDescription = selectedAffiliation.description;

    summaryAffiliation.textContent = character.affiliationName;

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
    summaryAffiliation.textContent = character.affiliationName;

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

function updateTalentSummary() {
    summaryAura.textContent = character.talents.aura;
    summaryStamina.textContent = character.talents.stamina;
    summaryAgility.textContent = character.talents.agility;
    summaryWillpower.textContent = character.talents.willpower;
    summaryFunction.textContent = character.talents.function;
    summaryTechnique.textContent = character.talents.technique;
}

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

    updateTalentSummary();
}

// ========== Derived Stat Calculations ==========

function calculateDerivedStats() {
    character.hp = 10 + character.talents.function;
    character.mov = 1 + character.talents.agility;

    summaryMov.textContent = character.mov;
    summaryDefense.textContent = character.defense;
}

// ========================================
// STARTING ITEMS FUNCTIONS
// ========================================

function calculateStartingItems() {
    character.startingItems.karmaMedKits = 2;
    character.startingItems.merits = 20;
    character.startingItems.fishbowls = 1;
    character.startingItems.specialtyItems = [];

    if (character.specialty === "Ink Fighter") {
        character.startingItems.specialtyItems.push("3 Ink Syringes");
    }

    else if (character.specialty === "Escape Artist") {
        // Escape Artist choice handled by UI
    }

    else if (character.specialty === "Clockbot") {
        character.startingItems.specialtyItems.push("1 Large Integrated Torus");
    }

    else if (character.specialty === "Special Agent") {
        character.startingItems.specialtyItems.push("1 Security Badge");
    }
}

function updateStartingItemsDisplay() {
    specialtyItemDisplay.innerHTML = "";

    if (character.specialty === "Ink Fighter") {
        specialtyItemDisplay.textContent = "3 Ink Syringes";
    }

    else if (character.specialty === "Escape Artist") {
        const largeOption = document.createElement("label");

        const largeRadio = document.createElement("input");
        largeRadio.type = "radio";
        largeRadio.name = "escapeArtistTorus";
        largeRadio.value = "1 Large Torus";

        largeRadio.addEventListener("change", function() {
            if (largeRadio.checked) {
                setEscapeArtistTorusChoice(largeRadio.value);
            }
        });

        const largeText = document.createTextNode(" 1 Large Torus");

        largeOption.appendChild(largeRadio);
        largeOption.appendChild(largeText);

        const smallOption = document.createElement("label");

        const smallRadio = document.createElement("input");
        smallRadio.type = "radio";
        smallRadio.name = "escapeArtistTorus";
        smallRadio.value = "2 Small Toruses";

        smallRadio.addEventListener("change", function() {
            if (smallRadio.checked) {
                setEscapeArtistTorusChoice(smallRadio.value);
            }
        });

        const smallText = document.createTextNode(" 2 Small Toruses");

        smallOption.appendChild(smallRadio);
        smallOption.appendChild(smallText);

        specialtyItemDisplay.appendChild(largeOption);
        specialtyItemDisplay.appendChild(smallOption);
    }

    else if (character.specialty === "Clockbot") {
        specialtyItemDisplay.textContent =
            "1 Large Integrated Torus";
    }

    else if (character.specialty === "Special Agent") {
        specialtyItemDisplay.textContent =
            "1 Security Badge";
    }
}

function setEscapeArtistTorusChoice(choice) {
    character.startingItems.specialtyItems = [choice];
}

// ========================================
// POWER FUNCTIONS
// ========================================

function getPowerElement(tier, powerType, field) {
    const formattedPowerType =
        powerType.charAt(0).toUpperCase() + powerType.slice(1);

    return document.getElementById(
        `${tier}${formattedPowerType}${field}`
    );
}

function displayPower(tier, powerType, power) {
    getPowerElement(tier, powerType, "Name").value = power.name;
    getPowerElement(tier, powerType, "Description").value = power.description;
    getPowerElement(tier, powerType, "KP").textContent = power.kpCost;
    getPowerElement(tier, powerType, "Damage").textContent = power.damage ?? "-";
    getPowerElement(tier, powerType, "Range").textContent = power.range;
    getPowerElement(tier, powerType, "Effect").textContent = power.effect;
}

function findStudyPowerDefinition(studyName) {
    return studyPowerDefinitions.find(function(study) {
        return study.study === studyName;
    });
}

function populatePowerDefinitions() {
    const selectedStudy = findStudyPowerDefinition(character.study);

    if (!selectedStudy) {
        return;
    }

    const tiers = [
        "basicTier1",
        "basicTier2",
        "advancedTier1",
        "advancedTier2"
    ];

    const powerTypes = [
        "attack",
        "defense",
        "combo",
        "signature",
        "locomotion"
    ];

    for (const tier of tiers) {
        for (const powerType of powerTypes) {
            const definition = selectedStudy[tier][powerType];
            const characterPower = character.powers[tier][powerType];

            characterPower.kpCost = definition.kpCost;
            characterPower.damage = definition.damage;
            characterPower.range = definition.range;
            characterPower.effect = definition.effect;
        }
    }
}

function displayAllPowers() {
    const tiers = [
        "basicTier1",
        "basicTier2",
        "advancedTier1",
        "advancedTier2"
    ];

    const powerTypes = [
        "attack",
        "defense",
        "combo",
        "signature",
        "locomotion"
    ];

    for (const tier of tiers) {
        for (const powerType of powerTypes) {
            const power = character.powers[tier][powerType];

            displayPower(tier, powerType, power);
        }
    }
}

function setupPowerInput(tier, powerType) {
    const nameInput = getPowerElement(tier, powerType, "Name");
    const descriptionInput = getPowerElement(tier, powerType, "Description");

    nameInput.addEventListener("input", function() {
        character.powers[tier][powerType].name = nameInput.value;

        if (tier === "basicTier1") {
            if (powerType === "attack") {
                summaryAttackName.textContent = nameInput.value || "-";
            }

            if (powerType === "defense") {
                summaryDefenseName.textContent = nameInput.value || "-";
            }

            if (powerType === "combo") {
                summaryComboName.textContent = nameInput.value || "-";
            }

            if (powerType === "signature") {
                summarySignatureName.textContent = nameInput.value || "-";
            }

            if (powerType === "locomotion") {
                summaryLocomotionName.textContent = nameInput.value || "-";
            }
        }
    });

    descriptionInput.addEventListener("input", function() {
        character.powers[tier][powerType].description = descriptionInput.value;
    });
}

setupPowerInput("basicTier1", "attack");
setupPowerInput("basicTier1", "defense");
setupPowerInput("basicTier1", "combo");
setupPowerInput("basicTier1", "signature");
setupPowerInput("basicTier1", "locomotion");

setupPowerInput("basicTier2", "attack");
setupPowerInput("basicTier2", "defense");
setupPowerInput("basicTier2", "combo");
setupPowerInput("basicTier2", "signature");
setupPowerInput("basicTier2", "locomotion");

setupPowerInput("advancedTier1", "attack");
setupPowerInput("advancedTier1", "defense");
setupPowerInput("advancedTier1", "combo");
setupPowerInput("advancedTier1", "signature");
setupPowerInput("advancedTier1", "locomotion");

setupPowerInput("advancedTier2", "attack");
setupPowerInput("advancedTier2", "defense");
setupPowerInput("advancedTier2", "combo");
setupPowerInput("advancedTier2", "signature");
setupPowerInput("advancedTier2", "locomotion");

function resetPowers() {
    const tiers = [
        "basicTier1",
        "basicTier2",
        "advancedTier1",
        "advancedTier2"
    ];

    const powerTypes = [
        "attack",
        "defense",
        "combo",
        "signature",
        "locomotion"
    ];

    for (const tier of tiers) {
        for (const powerType of powerTypes) {
            character.powers[tier][powerType].name = "";
            character.powers[tier][powerType].description = "";
            character.powers[tier][powerType].kpCost = null;
            character.powers[tier][powerType].damage = null;
            character.powers[tier][powerType].range = "-";
            character.powers[tier][powerType].effect = "-";
        }
    }
}

// NON-KARMA ATTACK FUNCTIONS ============

function setupNonKarmaAttackInput(type, number) {
    const nameInput = getNonKarmaAttackElement(type, number, "Name");

    nameInput.addEventListener("input", function() {
        character.nonKarmaAttacks[type][number - 1].name = nameInput.value;
    });
}

setupNonKarmaAttackInput("basic", 1);
setupNonKarmaAttackInput("basic", 2);
setupNonKarmaAttackInput("basic", 3);

setupNonKarmaAttackInput("advanced", 1);
setupNonKarmaAttackInput("advanced", 2);
setupNonKarmaAttackInput("advanced", 3);

function populateNonKarmaAttacks() {
    const selectedSpecialty = nonKarmaAttackDefinitions.find(function(specialty) {
        return specialty.specialty === character.specialty;
    });

    if (!selectedSpecialty) {
        return;
    }

    for (let i = 0; i < 3; i++) {
        character.nonKarmaAttacks.basic[i].damage = selectedSpecialty.basic[i].damage;
        character.nonKarmaAttacks.basic[i].range = selectedSpecialty.basic[i].range;
        character.nonKarmaAttacks.basic[i].effect = selectedSpecialty.basic[i].effect;

        character.nonKarmaAttacks.advanced[i].damage = selectedSpecialty.advanced[i].damage;
        character.nonKarmaAttacks.advanced[i].range = selectedSpecialty.advanced[i].range;
        character.nonKarmaAttacks.advanced[i].effect = selectedSpecialty.advanced[i].effect;
    }
}

function getNonKarmaAttackElement(type, number, field) {
    return document.getElementById(
        `${type}NonKarmaAttack${number}${field}`
    );
}

function displayNonKarmaAttack(type, number, attack) {
    getNonKarmaAttackElement(type, number, "Name").value = attack.name;
    getNonKarmaAttackElement(type, number, "Damage").textContent = attack.damage;
    getNonKarmaAttackElement(type, number, "Range").textContent = attack.range;
    getNonKarmaAttackElement(type, number, "Effect").textContent = attack.effect;
}

function displayAllNonKarmaAttacks() {
    for (let i = 0; i < 3; i++) {
        displayNonKarmaAttack(
            "basic",
            i + 1,
            character.nonKarmaAttacks.basic[i]
        );

        displayNonKarmaAttack(
            "advanced",
            i + 1,
            character.nonKarmaAttacks.advanced[i]
        );
    }
}

function resetNonKarmaAttacks() {
    for (let i = 0; i < 3; i++) {
        character.nonKarmaAttacks.basic[i].name = "";
        character.nonKarmaAttacks.advanced[i].name = "";
    }
}

function basicKarmaPowersAreComplete() {
    const basicTier1 = character.powers.basicTier1;

    return (
        basicTier1.attack.name.trim() !== "" &&
        basicTier1.attack.description.trim() !== "" &&
        basicTier1.defense.name.trim() !== "" &&
        basicTier1.defense.description.trim() !== "" &&
        basicTier1.combo.name.trim() !== "" &&
        basicTier1.combo.description.trim() !== "" &&
        basicTier1.signature.name.trim() !== "" &&
        basicTier1.signature.description.trim() !== "" &&
        basicTier1.locomotion.name.trim() !== "" &&
        basicTier1.locomotion.description.trim() !== ""
    );
}

function basicNonKarmaAttacksAreComplete() {
    return (
        character.nonKarmaAttacks.basic[0].name.trim() !== "" &&
        character.nonKarmaAttacks.basic[1].name.trim() !== "" &&
        character.nonKarmaAttacks.basic[2].name.trim() !== ""
    );
}

// ========================================
// FINALIZE FUNCTIONS
// ========================================

function canFinalizeCharacter() {
    return getFinalizationErrors().length === 0;
}

function getFinalizationErrors() {
    const errors = [];

    if (character.name.trim() === "") {
        errors.push("Character Name is required.");
    }

    if (character.age.trim() === "") {
        errors.push("Character Age is required.");
    }

    if (character.gender.trim() === "") {
        errors.push("Character Gender is required.");
    }

    if (
        character.specialty === "Escape Artist" &&
        character.startingItems.specialtyItems.length === 0
    ) {
        errors.push("Escape Artists much choose a starting torus.");
    }

    if (character.affiliation.trim() === "") {
        errors.push("Must select an Affiliation.");
    }

    if (!basicKarmaPowersAreComplete()) {
        errors.push("All Basic Tier 1 Karma Powers must have a name and description.");
    }

    if (!basicNonKarmaAttacksAreComplete()) {
        errors.push("All Basic Non-Karma Attacks must have a name.");
    }
    
    if (!traitsAndFlawsAreBalanced()) {
        errors.push("Trait and Flaw counts must match.");
    }

    if (character.traits.length > 5) {
        errors.push("You cannot have more than 5 Traits.");
    }

    if (character.flaws.length > 5) {
        errors.push("You cannot have more than 5 Flaws.");
    }

    return errors;
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

function updateTraitFlawSummary() {
    summaryTraits.textContent = character.traits.join(", ");
    summaryFlaws.textContent = character.flaws.join(", ");
}

function updateTraitFlawDisplay() {
    updateTraitFlawSummary();

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
