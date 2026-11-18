
import init, { JsHTTPHandler, JsStorageHandler } from "./core/transsafety_minimal_core.js"; 

const STORAGE_KEY_PREFIX = "transsafety-minimal/";

export let sessionStorageHandler, localStorageHandler;

export async function linkStorageHandler() {
    sessionStorageHandler = JsStorageHandler.new(
        (key) => sessionStorage.getItem(STORAGE_KEY_PREFIX + key),
        (key, val) => sessionStorage.setItem(STORAGE_KEY_PREFIX + key, val),
        (key) => sessionStorage.removeItem(STORAGE_KEY_PREFIX + key),
        () => sessionStorage.clear()
    );
    localStorageHandler = JsStorageHandler.new(
        (key) => localStorage.getItem(STORAGE_KEY_PREFIX + key),
        (key, val) => localStorage.setItem(STORAGE_KEY_PREFIX + key, val),
        (key) => localStorage.removeItem(STORAGE_KEY_PREFIX + key),
        () => localStorage.clear()
    );
}

export let httpHandler;

export async function linkHTTPHandler() {
    httpHandler = JsHTTPHandler.new(
        async (request_json) => {
            const request = JSON.parse(request_json);
            let headerMap = {};
            request.headers.forEach(element => {
                const split = element.split(":" , 2);
                const headerKey = split[0].trim();
                const headerValue = split[1].trim();
                headerMap[headerKey] = headerValue;
            });
            const fetched = await fetch(request.url, {method: request.method, headers: headerMap, body: request.body});
            const body = await fetched.text();
            let headerArr = [];
            fetched.headers.keys.forEach(key => {
                headerArr.push(key + ": " + fetched.headers.get(key));
            });
            let response = {
                response_code: fetched.status,
                headers: headerArr,
                body: body
            };
            return JSON.stringify(response);
        }
    )    
}

export async function linkCore() {
    await init();
    await linkStorageHandler();
    await linkHTTPHandler();
}
