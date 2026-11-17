
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

    const safeDataList = document.querySelector("#safe-data");
    init().then(() => {
        let password = generate_password(safeFormData.service, safeFormData.user, safeFormData.masterKey);
        let passwordEntry = document.createElement("li");
        passwordEntry.textContent = "Password: " + password;
        safeDataList.appendChild(passwordEntry);
    });

});
