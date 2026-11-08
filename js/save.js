// ========================================
// CHARACTER SAVE SYSTEM
// ========================================

const SAVE_STORAGE_KEY = "fluxFantasyCharacterSaves";
const SAVE_VERSION = 1;


// ========================================
// GET ALL SAVED CHARACTERS
// ========================================

function getAllCharacterSaves() {
    const savedData = localStorage.getItem(SAVE_STORAGE_KEY);

    if (!savedData) {
        return [];
    }

    try {
        const saves = JSON.parse(savedData);

        if (!Array.isArray(saves)) {
            console.error("Saved character data is not an array.");
            return [];
        }

        return saves;
    } catch (error) {
        console.error("Could not read saved characters:", error);
        return [];
    }
}


// ========================================
// GET ONE SAVED CHARACTER
// ========================================

function getCharacterSave(saveId) {
    const saves = getAllCharacterSaves();

    return saves.find(function(save) {
        return save.id === saveId;
    }) || null;
}


// ========================================
// SAVE OR UPDATE A CHARACTER
// ========================================

function saveCharacterData(characterData, builderState = {}, saveId = null) {
    const saves = getAllCharacterSaves();

    const existingSave = saves.find(function(save) {
        return save.id === saveId;
    });

    const now = new Date().toISOString();

    const saveRecord = {
        saveVersion: SAVE_VERSION,

        id: existingSave
            ? existingSave.id
            : crypto.randomUUID(),

        name: characterData.name.trim() || "Untitled Character",

        createdAt: existingSave
            ? existingSave.createdAt
            : now,
        
        updatedAt: now,

        character: JSON.parse(JSON.stringify(characterData)),

        builderState: JSON.parse(JSON.stringify(builderState))
    };

    if (existingSave) {
        const saveIndex = saves.findIndex(function(save) {
            return save.id === saveId;
        });

        saves[saveIndex] = saveRecord;
    } else {
        saves.push(saveRecord);
    }

    localStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(saves));

    return saveRecord;
}


// ========================================
// DELETE A SAVED CHARACTER
// ========================================

function deleteCharacterSave(saveId) {
    const saves = getAllCharacterSaves();

    const updatedSaves = saves.filter(function(save) {
        return save.id !== saveId;
    });

    localStorage.setItem(
        SAVE_STORAGE_KEY,
        JSON.stringify(updatedSaves)
    );

    return updatedSaves.length < saves.length;
}