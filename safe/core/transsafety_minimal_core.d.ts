/* tslint:disable */
/* eslint-disable */

export function cypher_byte(base: number, add: number): number;

export function decrypt_text(text: string, key: string): string;

export function decypher_byte(base: number, sub: number): number;

export function encrypt_text(text: string, key: string): string;

export function generate_cypher_key(key: string, len: number): Uint8Array;

export function generate_password(service: string, user: string, master_key: string, leak_count: number): string;

export function get_higher_char(from: string): string;

export function get_in_range(index: number, begin: number, end: number): number;

export function get_lower_char(from: string): string;

export function get_num_char(from: string): string;

export function get_special_char(from: string): string;

export function hex_to_u8s(h: string): Uint8Array;

export function u8s_to_hex(v: Uint8Array | number[]): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly cypher_byte: (a: number, b: number) => number;
    readonly decrypt_text: (a: number, b: number, c: number, d: number) => [number, number];
    readonly decypher_byte: (a: number, b: number) => number;
    readonly encrypt_text: (a: number, b: number, c: number, d: number) => [number, number];
    readonly generate_cypher_key: (a: number, b: number, c: number) => [number, number];
    readonly generate_password: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number];
    readonly get_higher_char: (a: number) => number;
    readonly get_in_range: (a: number, b: number, c: number) => number;
    readonly get_lower_char: (a: number) => number;
    readonly get_num_char: (a: number) => number;
    readonly get_special_char: (a: number) => number;
    readonly hex_to_u8s: (a: number, b: number) => [number, number];
    readonly u8s_to_hex: (a: number, b: number) => [number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
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
