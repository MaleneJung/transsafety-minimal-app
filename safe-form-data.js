
let safeFormData = {
    service: "",
    user: "",
    masterKey: ""
};

function loadSafeFormData() {
    const safeFormDataStr = sessionStorage.getItem("transsafety-minimal/safeFormData");
    if(safeFormDataStr) {
        safeFormData = JSON.parse(safeFormDataStr);
    }
}

function saveSafeFormData() {
    const safeFormDataStr = JSON.stringify(safeFormData);
    sessionStorage.setItem("transsafety-minimal/safeFormData", safeFormDataStr);
}

window.addEventListener("load", loadSafeFormData);
