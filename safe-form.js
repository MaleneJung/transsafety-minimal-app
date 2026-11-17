
window.addEventListener("load", () => {

    const safeServiceIn = document.querySelector("#safe-service");
    safeServiceIn.value = safeFormData.service;
    const safeUserIn = document.querySelector("#safe-user");
    safeUserIn.value = safeFormData.user;
    const safeMasterKeyIn = document.querySelector("#safe-master-key");
    safeMasterKeyIn.value = safeFormData.masterKey;
    const safeForm = document.querySelector("#safe-form");

    safeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        safeFormData = {
            service: safeServiceIn.value,
            user: safeUserIn.value,
            masterKey: safeMasterKeyIn.value
        };
        saveSafeFormData();
        window.open("/safe/", "_self");
    });

});
