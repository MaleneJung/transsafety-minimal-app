import { linkCore, safeArgs, sessionStorageHandler } from "./core-linker.js";

window.addEventListener("load", () => {

    linkCore().then(() => {

        const params = new URL(document.URL).searchParams;

        const safeServiceIn = document.querySelector("#safe-service");
        safeServiceIn.value = safeArgs.get_service();
        if(params.get("service"))
            safeServiceIn.value = params.get("service");
        const safeUserIn = document.querySelector("#safe-user");
        safeUserIn.value = safeArgs.get_user();
        if(params.get("user"))
            safeUserIn.value = params.get("user");
        const safeMasterKeyIn = document.querySelector("#safe-master-key");
        safeMasterKeyIn.value = safeArgs.get_master_key();
        if(params.get("master_key"))
            safeMasterKeyIn.value = params.get("master_key");
        const safeForm = document.querySelector("#safe-form");

        safeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            safeArgs.set(safeServiceIn.value, safeUserIn.value, safeMasterKeyIn.value);
            safeArgs.js_save(sessionStorageHandler);
            window.open("safe/", "_self");
        });

    });

});
