
import init, {generate_safe_id, decrypt_text, encrypt_text, generate_password} from "./safe/core/transsafety_minimal_core.js";

export let loadedSafe = {
    safeID: "",
    safePWLeakCountModifier: 0,
    safeData: ""
}

export let loadedSafeList = []

export function loadSafeList() {
    const safeListStr = localStorage.getItem("transsafety-minimal/safeList");
    if(safeListStr) {
        loadedSafeList = JSON.parse(safeListStr);
    }
}

export function saveSafeList() {
    const safeListStr = JSON.stringify(loadedSafeList);
    localStorage.setItem("transsafety-minimal/safeList", safeListStr);
}

window.addEventListener("load", loadSafeList);

export async function loadSafe() {
    await init();
    const safePassword = generate_password(safeFormData.service, safeFormData.user, safeFormData.masterKey, 0);
    const safeID = generate_safe_id(safeFormData.service, safeFormData.user, safeFormData.masterKey);
    const encryptedSafeStr = localStorage.getItem("transsafety-minimal/safeList/" + safeID);
    if(encryptedSafeStr) {
        const encryptedSafe = JSON.parse(encryptedSafeStr);
        loadedSafe = {
            safeID: encryptedSafe.safeID,
            safePWLeakCountModifier: encryptedSafe.safePWLeakCountModifier,
            safeData: encryptedSafe.safeData.length > 0 ? decrypt_text(encryptedSafe.safeData, safePassword) : ""
        };
        console.log("From Storage!");
    } else {
        loadedSafe = {
            safeID: safeID,
            safePWLeakCountModifier: 0,
            safeData: ""
        };
        saveSafe();
        console.log("New in Storage!");
    }
}

export async function saveSafe() {
    await init();
    const safePassword = generate_password(safeFormData.service, safeFormData.user, safeFormData.masterKey, 0);
    if(!loadedSafeList.includes(loadedSafe.safeID)) {
        loadedSafeList.push(loadedSafe.safeID);
        saveSafeList();
    }
    const encryptedSafe = {
        safeID: loadedSafe.safeID,
        safePWLeakCountModifier: loadedSafe.safePWLeakCountModifier,
        safeData: loadedSafe.safeData.length > 0 ? encrypt_text(loadedSafe.safeData, safePassword) : ""
    };
    const encryptedSafeStr = JSON.stringify(encryptedSafe);
    localStorage.setItem("transsafety-minimal/safeList/" + loadedSafe.safeID, encryptedSafeStr);
}
/*
export function exportBackup() {
    loadSafeList();
    let backupList = []
    loadedSafeList.forEach((safeID) => {
        const encryptedSafeStr = localStorage.getItem("transsafety-minimal/safeList/" + safeID);
        if(encryptedSafeStr) 
            backupList.push(JSON.parse(encryptedSafeStr));
    });
    const backupListStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupList));
    const tempAnchorNode = document.createElement("a");
    tempAnchorNode.href = backupListStr;
    tempAnchorNode.download = "transsafety-minimal-backup.json";
    document.body.appendChild(tempAnchorNode);
    tempAnchorNode.click();
    tempAnchorNode.remove();
}

export function importBackup() {
}

*/


