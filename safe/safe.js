
import init, { generate_password } from "./core/transsafety_minimal_core.js"

window.addEventListener("load", () => {

    const safeForHeader = document.querySelector("#safe-for");
    safeForHeader.textContent = (
        "Safe for: "
        + (safeFormData.user.length > 0 ? "\"" + safeFormData.user + "\" @ " : "")
        + "\"" + safeFormData.service + "\"" 
    );

    const header = document.querySelector("#header");
    header.style.cursor = "pointer";
    header.addEventListener("click", () => window.open("../", "_self"));

    const safePWDisplay = document.querySelector("#safe-pw-display");
    const safePWLeakCountIn = document.querySelector("#safe-pw-leak-count");

    function updatePassword() {
        init().then(() => {
            let password = generate_password(safeFormData.service, safeFormData.user, safeFormData.masterKey, safePWLeakCountIn.value);
            safePWDisplay.textContent = "Password: " + password;
        });
    }

    const safeDataTextArea = document.querySelector("#safe-data");
    
    updatePassword();
    safePWLeakCountIn.addEventListener("change", updatePassword);

});
