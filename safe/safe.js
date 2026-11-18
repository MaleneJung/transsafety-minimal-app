
import { linkCore, localStorageHandler, safe, safeArgs, safeList } from "../core-linker.js";

window.addEventListener("load", () => {

    linkCore().then(() => {

        const safeForHeader = document.querySelector("#safe-for");
        safeForHeader.textContent = (
            "Safe for: "
            + (safeArgs.get_user().length > 0 ? "\"" + safeArgs.get_user() + "\" @ " : "")
            + "\"" + safeArgs.get_service() + "\"" 
        );

        const header = document.querySelector("#header");
        header.style.cursor = "pointer";
        header.addEventListener("click", () => window.open("../", "_self"));

        const safePWDisplay = document.querySelector("#safe-pw-display");
        const safePWLeakCountIn = document.querySelector("#safe-pw-leak-count");

        function updatePassword() {
            let password = safeArgs.generate_password(safePWLeakCountIn.value);
            safePWDisplay.textContent = "Password: " + password;
        }

        const safeDataTextArea = document.querySelector("#safe-data");
        safeDataTextArea.addEventListener("input", () => {
            safe.set_notes(safeDataTextArea.value);
        });

        const safeSaveButton = document.querySelector("#safe-save");
        safeSaveButton.addEventListener("click", () => {
            safe.js_save(safeArgs, localStorageHandler, safeList);
        });

        safePWLeakCountIn.value = safe.get_leak_count();
        safeDataTextArea.value = safe.get_notes();

        updatePassword();
        safePWLeakCountIn.addEventListener("change", () => {
            safe.set_leak_count(safePWLeakCountIn.value);
            safe.js_save(safeArgs, localStorageHandler, safeList);
            updatePassword();
        });

    });

});
