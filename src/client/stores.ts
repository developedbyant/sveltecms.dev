import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

/** project store with basic information/stages */
export const appStore:Writable<{
    navIsOpen:boolean
    cartIsOpen:boolean
}> = writable({ navIsOpen:false,cartIsOpen:false })