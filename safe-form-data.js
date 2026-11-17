
let safeFormData = {
    service: "",
    user: "",
    masterKey: ""
};

function loadSafeFormData() {
    const sessionStr = sessionStorage.getItem("session");
    if(sessionStr) {
        safeFormData = JSON.parse(sessionStr);
    }
}

function saveSafeFormData() {
    const sessionStr = JSON.stringify(safeFormData);
    sessionStorage.setItem("session", sessionStr);
}

window.addEventListener("load", loadSafeFormData);
