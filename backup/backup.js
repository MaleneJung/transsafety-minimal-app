import { linkCore, localStorageHandler } from "../core-linker.js";
import { js_export_backup, js_import_backup } from "../core/transsafety_minimal_core.js";



window.addEventListener("load", () => {

    linkCore().then(() => {

        function downloadBackup(backup) {
            const backupListStr = "data:text/json;charset=utf-8," + encodeURIComponent(backup);
            const tempAnchorNode = document.createElement("a");
            tempAnchorNode.href = backupListStr;
            tempAnchorNode.download = "transsafety-minimal-backup.json";
            document.body.appendChild(tempAnchorNode);
            tempAnchorNode.click();
            tempAnchorNode.remove();
        }

        const header = document.querySelector("#header");
        header.style.cursor = "pointer";
        header.addEventListener("click", () => window.open("../", "_self"));
        
        const exportTextArea = document.querySelector("#backup-json-export");
        exportTextArea.value = js_export_backup(localStorageHandler);

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
            js_import_backup(trimmedImportJSON, localStorageHandler);
        });

    });

});
