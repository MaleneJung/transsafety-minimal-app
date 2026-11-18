import { linkCore, localStorageHandler, safe, safeArgs, sessionStorageHandler, STORAGE_KEY_PREFIX } from "./core-linker.js";



window.addEventListener("load", () => {

    linkCore().then(() => {

        const params = new URL(document.URL).searchParams;

        const frameID = params.get("frame_id");
        let frame;
        const frameJSON = localStorage.getItem(STORAGE_KEY_PREFIX + "frame/" + frameID);
        if(frameJSON)
            frame = JSON.parse(frameJSON);

        const safeServiceIn = document.querySelector("#safe-service");
        safeServiceIn.value = safeArgs.get_service();
        if(params.get("service"))
            safeServiceIn.value = params.get("service");
        if(frame)
            safeServiceIn.value = frame.service;
        const safeUserIn = document.querySelector("#safe-user");
        safeUserIn.value = safeArgs.get_user();
        if(params.get("user"))
            safeUserIn.value = params.get("user");
        if(frame)
            safeUserIn.value = frame.user;
        const safeMasterKeyIn = document.querySelector("#safe-master-key");
        safeMasterKeyIn.value = safeArgs.get_master_key();
        if(params.get("master_key"))
            safeMasterKeyIn.value = params.get("master_key");
        const safeForm = document.querySelector("#safe-form");

        safeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            safeArgs.set(safeServiceIn.value, safeUserIn.value, safeMasterKeyIn.value);
            safeArgs.js_save(sessionStorageHandler);
            if(frameID) {
                linkCore().then(() => {
                    frame = {
                        service: safeServiceIn.value,
                        user: safeUserIn.value
                    };
                    localStorage.setItem(STORAGE_KEY_PREFIX + "frame/" + frameID, JSON.stringify(frame))
                    const password = safeArgs.generate_password(safe.get_leak_count());
                    window.open("safe/?password=" + encodeURI(password), "_self");
                });
            } else {
                window.open("safe/", "_self");
            }
        });

    });

});
