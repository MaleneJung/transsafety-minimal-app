
import { exportBackup, importBackup, downloadBackup } from "../safe-list.js";

window.addEventListener("load", () => {

    const header = document.querySelector("#header");
    header.style.cursor = "pointer";
    header.addEventListener("click", () => window.open("../", "_self"));
    
    const exportTextArea = document.querySelector("#backup-json-export");
    exportTextArea.value = exportBackup();

    const exportForm = document.querySelector("#backup-export");
    exportForm.addEventListener("submit", (e) => {
        e.preventDefault();
        downloadBackup(exportTextArea.value);
    });

    const importTextArea = document.querySelector("#backup-json-import");

    const importForm = document.querySelector("#backup-import");
    importForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const trimmedImportJSON = importTextArea.value.trim();
        if(!trimmedImportJSON.startsWith("[") || !trimmedImportJSON.endsWith("]")) {
            alert("Wrong Import Format!");
        }
        importBackup(trimmedImportJSON); 
    });

});
