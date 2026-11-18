import { linkCore, localStorageHandler, safe, safeArgs, sessionStorageHandler, STORAGE_KEY_PREFIX } from "./core-linker.js";



window.addEventListener("load", () => {

    linkCore().then(() => {

        const params = new URL(document.URL).searchParams;

        const frameID = params.get("frame_id");
        const frameStorageBaseKey = frameID ? STORAGE_KEY_PREFIX + "frame/" + frameID : undefined;
        const frameService = frameID ? localStorage.getItem(frameStorageBaseKey + "/service") : undefined;
        const frameUser = frameID ? localStorage.getItem(frameStorageBaseKey + "/user") : undefined;
        const frameMasterKey = frameID ? sessionStorage.getItem(frameStorageBaseKey + "/master-key") : undefined;

        const safeServiceIn = document.querySelector("#safe-service");
        safeServiceIn.value = safeArgs.get_service();
        if(params.get("service"))
            safeServiceIn.value = params.get("service");
        if(frameService)
            safeServiceIn.value = frameService;
        const safeUserIn = document.querySelector("#safe-user");
        safeUserIn.value = safeArgs.get_user();
        if(params.get("user"))
            safeUserIn.value = params.get("user");
        if(frameUser)
            safeUserIn.value = frameUser;
        const safeMasterKeyIn = document.querySelector("#safe-master-key");
        safeMasterKeyIn.value = safeArgs.get_master_key();
        if(params.get("master_key"))
            safeMasterKeyIn.value = params.get("master_key");
        if(frameMasterKey)
            safeMasterKeyIn.value = frameMasterKey;
        const safeForm = document.querySelector("#safe-form");

        safeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            safeArgs.set(safeServiceIn.value, safeUserIn.value, safeMasterKeyIn.value);
            safeArgs.js_save(sessionStorageHandler);
            if(frameID) {
                linkCore().then(() => {
                    localStorage.setItem(frameStorageBaseKey + "/service", safeServiceIn.value);
                    localStorage.setItem(frameStorageBaseKey + "/user", safeUserIn.value);
                    sessionStorage.setItem(frameStorageBaseKey + "/master-key", safeMasterKeyIn.value);
                    const password = safeArgs.generate_password(safe.get_leak_count());
                    window.open("safe/?password=" + encodeURI(password), "_self");
                });
            } else {
                window.open("safe/", "_self");
            }
        });

    });

});
