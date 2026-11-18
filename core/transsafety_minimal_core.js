/* @ts-self-types="./transsafety_minimal_core.d.ts" */

export class JsHTTPHandler {
    static __wrap(ptr) {
        const obj = Object.create(JsHTTPHandler.prototype);
        obj.__wbg_ptr = ptr;
        JsHTTPHandlerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        JsHTTPHandlerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jshttphandler_free(ptr, 0);
    }
    /**
     * @param {Function} fetch
     * @returns {JsHTTPHandler}
     */
    static new(fetch) {
        const ret = wasm.jshttphandler_new(fetch);
        return JsHTTPHandler.__wrap(ret);
    }
}
if (Symbol.dispose) JsHTTPHandler.prototype[Symbol.dispose] = JsHTTPHandler.prototype.free;

export class JsStorageHandler {
    static __wrap(ptr) {
        const obj = Object.create(JsStorageHandler.prototype);
        obj.__wbg_ptr = ptr;
        JsStorageHandlerFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        JsStorageHandlerFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_jsstoragehandler_free(ptr, 0);
    }
    /**
     * @param {Function} get
     * @param {Function} set
     * @param {Function} remove
     * @param {Function} clear
     * @returns {JsStorageHandler}
     */
    static new(get, set, remove, clear) {
        const ret = wasm.jsstoragehandler_new(get, set, remove, clear);
        return JsStorageHandler.__wrap(ret);
    }
}
if (Symbol.dispose) JsStorageHandler.prototype[Symbol.dispose] = JsStorageHandler.prototype.free;

export class Safe {
    static __wrap(ptr) {
        const obj = Object.create(Safe.prototype);
        obj.__wbg_ptr = ptr;
        SafeFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SafeFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_safe_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get_leak_count() {
        const ret = wasm.safe_get_leak_count(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {string}
     */
    get_notes() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safe_get_notes(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safe_id(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {SafeArgs} safe_args
     * @param {JsStorageHandler} local_storage
     * @returns {Safe}
     */
    static js_load(safe_args, local_storage) {
        _assertClass(safe_args, SafeArgs);
        _assertClass(local_storage, JsStorageHandler);
        const ret = wasm.safe_js_load(safe_args.__wbg_ptr, local_storage.__wbg_ptr);
        return Safe.__wrap(ret);
    }
    /**
     * @param {string} id
     * @param {JsStorageHandler} local_storage
     * @returns {Safe}
     */
    static js_load_encrypŧed(id, local_storage) {
        _assertClass(local_storage, JsStorageHandler);
        const ptr0 = passStringToWasm0(id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.safe_js_load_encryp_ed(ptr0, len0, local_storage.__wbg_ptr);
        return Safe.__wrap(ret);
    }
    /**
     * @param {SafeArgs} safe_args
     * @param {JsStorageHandler} local_storage
     * @param {SafeList} list
     */
    js_save(safe_args, local_storage, list) {
        _assertClass(safe_args, SafeArgs);
        _assertClass(local_storage, JsStorageHandler);
        _assertClass(list, SafeList);
        wasm.safe_js_save(this.__wbg_ptr, safe_args.__wbg_ptr, local_storage.__wbg_ptr, list.__wbg_ptr);
    }
    /**
     * @param {number} leak_count
     */
    set_leak_count(leak_count) {
        wasm.safe_set_leak_count(this.__wbg_ptr, leak_count);
    }
    /**
     * @param {string} notes
     */
    set_notes(notes) {
        const ptr0 = passStringToWasm0(notes, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.safe_set_notes(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Safe.prototype[Symbol.dispose] = Safe.prototype.free;

export class SafeArgs {
    static __wrap(ptr) {
        const obj = Object.create(SafeArgs.prototype);
        obj.__wbg_ptr = ptr;
        SafeArgsFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SafeArgsFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_safeargs_free(ptr, 0);
    }
    /**
     * @param {number} leak_count
     * @returns {string}
     */
    generate_password(leak_count) {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safeargs_generate_password(this.__wbg_ptr, leak_count);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_master_key() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safeargs_get_master_key(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_service() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safeargs_get_service(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_user() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safeargs_get_user(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    id() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.safeargs_id(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {JsStorageHandler} session_storage
     * @returns {SafeArgs}
     */
    static js_load(session_storage) {
        _assertClass(session_storage, JsStorageHandler);
        const ret = wasm.safeargs_js_load(session_storage.__wbg_ptr);
        return SafeArgs.__wrap(ret);
    }
    /**
     * @param {JsStorageHandler} session_storage
     */
    js_save(session_storage) {
        _assertClass(session_storage, JsStorageHandler);
        wasm.safeargs_js_save(this.__wbg_ptr, session_storage.__wbg_ptr);
    }
    /**
     * @param {string} service
     * @param {string} user
     * @param {string} master_key
     */
    set(service, user, master_key) {
        let ptr0, len0, ptr1, len1, ptr2, len2;
        try {
            ptr0 = passStringToWasm0(service, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(user, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passStringToWasm0(master_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len2 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr2) { wasm.__wbindgen_free(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        wasm.safeargs_set(this.__wbg_ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    }
}
if (Symbol.dispose) SafeArgs.prototype[Symbol.dispose] = SafeArgs.prototype.free;

export class SafeList {
    static __wrap(ptr) {
        const obj = Object.create(SafeList.prototype);
        obj.__wbg_ptr = ptr;
        SafeListFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SafeListFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_safelist_free(ptr, 0);
    }
    /**
     * @returns {string[]}
     */
    get() {
        const ret = wasm.safelist_get(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]);
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {JsStorageHandler} local_storage
     * @returns {SafeList}
     */
    static js_load(local_storage) {
        _assertClass(local_storage, JsStorageHandler);
        const ret = wasm.safelist_js_load(local_storage.__wbg_ptr);
        return SafeList.__wrap(ret);
    }
    /**
     * @param {JsStorageHandler} local_storage
     */
    js_save(local_storage) {
        _assertClass(local_storage, JsStorageHandler);
        wasm.safelist_js_save(this.__wbg_ptr, local_storage.__wbg_ptr);
    }
    /**
     * @param {string} val
     */
    push(val) {
        const ptr0 = passStringToWasm0(val, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.safelist_push(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} val
     */
    remove(val) {
        const ptr0 = passStringToWasm0(val, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.safelist_remove(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) SafeList.prototype[Symbol.dispose] = SafeList.prototype.free;

/**
 * @param {number} base
 * @param {number} add
 * @returns {number}
 */
export function cypher_byte(base, add) {
    const ret = wasm.cypher_byte(base, add);
    return ret;
}

/**
 * @param {string} text
 * @param {string} key
 * @returns {string}
 */
export function decrypt_text(text, key) {
    let deferred3_0;
    let deferred3_1;
    try {
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        const ret = wasm.decrypt_text(ptr0, len0, ptr1, len1);
        deferred3_0 = ret[0];
        deferred3_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * @param {number} base
 * @param {number} sub
 * @returns {number}
 */
export function decypher_byte(base, sub) {
    const ret = wasm.decypher_byte(base, sub);
    return ret;
}

/**
 * @param {string} text
 * @param {string} key
 * @returns {string}
 */
export function encrypt_text(text, key) {
    let deferred3_0;
    let deferred3_1;
    try {
        let ptr0, len0, ptr1, len1;
        try {
            ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        const ret = wasm.encrypt_text(ptr0, len0, ptr1, len1);
        deferred3_0 = ret[0];
        deferred3_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}

/**
 * @param {string} key
 * @param {number} len
 * @returns {Uint8Array}
 */
export function generate_cypher_key(key, len) {
    const val2 = +len;
    const ptr0 = passStringToWasm0(key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.generate_cypher_key(ptr0, len0, val2);
    var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v3;
}

/**
 * @param {string} service
 * @param {string} user
 * @param {string} master_key
 * @param {number} leak_count
 * @returns {string}
 */
export function generate_password(service, user, master_key, leak_count) {
    let deferred5_0;
    let deferred5_1;
    try {
        const val4 = +leak_count;
        let ptr0, len0, ptr1, len1, ptr2, len2;
        try {
            ptr0 = passStringToWasm0(service, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(user, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passStringToWasm0(master_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len2 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr2) { wasm.__wbindgen_free(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        const ret = wasm.generate_password(ptr0, len0, ptr1, len1, ptr2, len2, val4);
        deferred5_0 = ret[0];
        deferred5_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred5_0, deferred5_1, 1);
    }
}

/**
 * @param {string} service
 * @param {string} user
 * @param {string} master_key
 * @returns {string}
 */
export function generate_safe_id(service, user, master_key) {
    let deferred4_0;
    let deferred4_1;
    try {
        let ptr0, len0, ptr1, len1, ptr2, len2;
        try {
            ptr0 = passStringToWasm0(service, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len0 = WASM_VECTOR_LEN;
            ptr1 = passStringToWasm0(user, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len1 = WASM_VECTOR_LEN;
            ptr2 = passStringToWasm0(master_key, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            len2 = WASM_VECTOR_LEN;
        } catch (e) {
            if (ptr2) { wasm.__wbindgen_free(ptr2, len2 * 1, 1); }
            if (ptr1) { wasm.__wbindgen_free(ptr1, len1 * 1, 1); }
            if (ptr0) { wasm.__wbindgen_free(ptr0, len0 * 1, 1); }
            throw e;
        }
        const ret = wasm.generate_safe_id(ptr0, len0, ptr1, len1, ptr2, len2);
        deferred4_0 = ret[0];
        deferred4_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred4_0, deferred4_1, 1);
    }
}

/**
 * @param {string} from
 * @returns {string}
 */
export function get_higher_char(from) {
    const char0 = from.codePointAt(0);
    _assertChar(char0);
    const ret = wasm.get_higher_char(char0);
    return String.fromCodePoint(ret);
}

/**
 * @param {number} index
 * @param {number} begin
 * @param {number} end
 * @returns {number}
 */
export function get_in_range(index, begin, end) {
    const ret = wasm.get_in_range(index, begin, end);
    return ret;
}

/**
 * @param {string} from
 * @returns {string}
 */
export function get_lower_char(from) {
    const char0 = from.codePointAt(0);
    _assertChar(char0);
    const ret = wasm.get_lower_char(char0);
    return String.fromCodePoint(ret);
}

/**
 * @param {string} from
 * @returns {string}
 */
export function get_num_char(from) {
    const char0 = from.codePointAt(0);
    _assertChar(char0);
    const ret = wasm.get_num_char(char0);
    return String.fromCodePoint(ret);
}

/**
 * @param {string} from
 * @returns {string}
 */
export function get_special_char(from) {
    const char0 = from.codePointAt(0);
    _assertChar(char0);
    const ret = wasm.get_special_char(char0);
    return String.fromCodePoint(ret);
}

/**
 * @param {string} h
 * @returns {Uint8Array}
 */
export function hex_to_u8s(h) {
    const ptr0 = passStringToWasm0(h, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.hex_to_u8s(ptr0, len0);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {JsStorageHandler} local_storage
 * @returns {string}
 */
export function js_export_backup(local_storage) {
    let deferred1_0;
    let deferred1_1;
    try {
        _assertClass(local_storage, JsStorageHandler);
        const ret = wasm.js_export_backup(local_storage.__wbg_ptr);
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

/**
 * @param {string} json
 * @param {JsStorageHandler} local_storage
 */
export function js_import_backup(json, local_storage) {
    _assertClass(local_storage, JsStorageHandler);
    const ptr0 = passStringToWasm0(json, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.js_import_backup(ptr0, len0, local_storage.__wbg_ptr);
}

/**
 * @param {Uint8Array | number[]} v
 * @returns {string}
 */
export function u8s_to_hex(v) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ptr0 = passArray8ToWasm0(v, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.u8s_to_hex(ptr0, len0);
        deferred2_0 = ret[0];
        deferred2_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_debug_string_f249a2a76caa9a55: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_string_get_7ce8eee7fd327545: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
            getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_call_40b008ba32f73991: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_a410eb4b59ed5965: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_call_fc92fee6137d452d: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.call(arg1, arg2, arg3);
            return ret;
        }, arguments); },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            table.set(0, undefined);
            table.set(1024, undefined);
            table.set(1025, null);
            table.set(1026, true);
            table.set(1027, false);
        },
    };
    return {
        __proto__: null,
        "./transsafety_minimal_core_bg.js": import0,
    };
}

const JsHTTPHandlerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_jshttphandler_free(ptr, 1));
const JsStorageHandlerFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_jsstoragehandler_free(ptr, 1));
const SafeFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_safe_free(ptr, 1));
const SafeArgsFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_safeargs_free(ptr, 1));
const SafeListFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_safelist_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertChar(c) {
    if (typeof(c) === 'number' && (c >= 0x110000 || (c >= 0xD800 && c < 0xE000))) throw new Error(`expected a valid Unicode scalar value, found ${c}`);
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function debugString(val) {
    switch (typeof val) {
        // primitive types
        case 'number':
        case 'boolean':
        case 'undefined':
        return `${val}`;
        case 'string':
        return JSON.stringify(val);
        case 'bigint':
        return `${val}n`;
        case 'symbol':
        return val.description !== undefined
            ? `Symbol(${val.description})`
            : 'Symbol';
        case 'function':
        return typeof val.name === 'string' && val.name !== ''
            ? `Function(${val.name})`
            : 'Function';
        case 'object': {
            if (val === null) {
                return 'null';
            }
            // objects
            if (Array.isArray(val)) {
                return '[' + Array.from(val, debugString).join(', ') + ']';
            }
            // errors
            if (val instanceof Error) {
                return `${val.name}: ${val.message}\n${val.stack}`;
            }

            const toStringOutput = toString.call(val);
            // Test for built-in
            const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

            // Failed to match the standard '[object ClassName]'
            if (className === undefined) {
                return toStringOutput;
            }
            if (className === 'Object') {
                // we're a user defined class or Object
                // JSON.stringify avoids problems with cycles, and is generally much
                // easier than looping through ownProperties of `val`.
                try {
                    return 'Object(' + JSON.stringify(val) + ')';
                } catch (_) {
                    return 'Object';
                }
            }
            // TODO we could test for more things here, like `Set`s and `Map`s.
            return className;
        }
        // Per MDN: 'This list of values is exhaustive.'
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
    }
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(bytes) {
    numBytesDecoded += bytes.length;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
        cachedTextDecoder.decode();
        numBytesDecoded = bytes.length;
    }
    return cachedTextDecoder.decode(bytes);
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

let __wbg_init_promise;
async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;
    if (__wbg_init_promise === undefined) {
        __wbg_init_promise = __wbg_init_once(module_or_path);
        __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
    }
    return __wbg_init_promise;
}

async function __wbg_init_once(module_or_path) {

    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('transsafety_minimal_core_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
