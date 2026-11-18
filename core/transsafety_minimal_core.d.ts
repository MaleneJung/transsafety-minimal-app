/* tslint:disable */
/* eslint-disable */

export class JsHTTPHandler {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static new(fetch: Function): JsHTTPHandler;
}

export class JsStorageHandler {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    static new(get: Function, set: Function, remove: Function, clear: Function): JsStorageHandler;
}

export class Safe {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    get_leak_count(): number;
    get_notes(): string;
    id(): string;
    static js_load(safe_args: SafeArgs, local_storage: JsStorageHandler): Safe;
    static js_load_encrypŧed(id: string, local_storage: JsStorageHandler): Safe;
    js_save(safe_args: SafeArgs, local_storage: JsStorageHandler, list: SafeList): void;
    set_leak_count(leak_count: number): void;
    set_notes(notes: string): void;
}

export class SafeArgs {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    generate_password(leak_count: number): string;
    get_master_key(): string;
    get_service(): string;
    get_user(): string;
    id(): string;
    static js_load(session_storage: JsStorageHandler): SafeArgs;
    js_save(session_storage: JsStorageHandler): void;
    set(service: string, user: string, master_key: string): void;
}

export class SafeList {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    get(): string[];
    static js_load(local_storage: JsStorageHandler): SafeList;
    js_save(local_storage: JsStorageHandler): void;
    push(val: string): void;
    remove(val: string): void;
}

export function cypher_byte(base: number, add: number): number;

export function decrypt_text(text: string, key: string): string;

export function decypher_byte(base: number, sub: number): number;

export function encrypt_text(text: string, key: string): string;

export function generate_cypher_key(key: string, len: number): Uint8Array;

export function generate_password(service: string, user: string, master_key: string, leak_count: number): string;

export function generate_safe_id(service: string, user: string, master_key: string): string;

export function get_higher_char(from: string): string;

export function get_in_range(index: number, begin: number, end: number): number;

export function get_lower_char(from: string): string;

export function get_num_char(from: string): string;

export function get_special_char(from: string): string;

export function hex_to_u8s(h: string): Uint8Array;

export function js_export_backup(local_storage: JsStorageHandler): string;

export function js_import_backup(json: string, local_storage: JsStorageHandler): void;

export function u8s_to_hex(v: Uint8Array | number[]): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_jshttphandler_free: (a: number, b: number) => void;
    readonly __wbg_jsstoragehandler_free: (a: number, b: number) => void;
    readonly __wbg_safe_free: (a: number, b: number) => void;
    readonly __wbg_safeargs_free: (a: number, b: number) => void;
    readonly __wbg_safelist_free: (a: number, b: number) => void;
    readonly cypher_byte: (a: number, b: number) => number;
    readonly decrypt_text: (a: number, b: number, c: number, d: number) => [number, number];
    readonly decypher_byte: (a: number, b: number) => number;
    readonly encrypt_text: (a: number, b: number, c: number, d: number) => [number, number];
    readonly generate_cypher_key: (a: number, b: number, c: number) => [number, number];
    readonly generate_password: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number];
    readonly generate_safe_id: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly get_higher_char: (a: number) => number;
    readonly get_in_range: (a: number, b: number, c: number) => number;
    readonly get_lower_char: (a: number) => number;
    readonly get_num_char: (a: number) => number;
    readonly get_special_char: (a: number) => number;
    readonly hex_to_u8s: (a: number, b: number) => [number, number];
    readonly js_export_backup: (a: number) => [number, number];
    readonly js_import_backup: (a: number, b: number, c: number) => void;
    readonly jshttphandler_new: (a: any) => number;
    readonly jsstoragehandler_new: (a: any, b: any, c: any, d: any) => number;
    readonly safe_get_leak_count: (a: number) => number;
    readonly safe_get_notes: (a: number) => [number, number];
    readonly safe_id: (a: number) => [number, number];
    readonly safe_js_load: (a: number, b: number) => number;
    readonly safe_js_load_encryp_ed: (a: number, b: number, c: number) => number;
    readonly safe_js_save: (a: number, b: number, c: number, d: number) => void;
    readonly safe_set_leak_count: (a: number, b: number) => void;
    readonly safe_set_notes: (a: number, b: number, c: number) => void;
    readonly safeargs_generate_password: (a: number, b: number) => [number, number];
    readonly safeargs_get_master_key: (a: number) => [number, number];
    readonly safeargs_get_service: (a: number) => [number, number];
    readonly safeargs_get_user: (a: number) => [number, number];
    readonly safeargs_id: (a: number) => [number, number];
    readonly safeargs_js_load: (a: number) => number;
    readonly safeargs_js_save: (a: number, b: number) => void;
    readonly safeargs_set: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
    readonly safelist_get: (a: number) => [number, number];
    readonly safelist_js_load: (a: number) => number;
    readonly safelist_js_save: (a: number, b: number) => void;
    readonly safelist_push: (a: number, b: number, c: number) => void;
    readonly safelist_remove: (a: number, b: number, c: number) => void;
    readonly u8s_to_hex: (a: number, b: number) => [number, number];
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __externref_drop_slice: (a: number, b: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
