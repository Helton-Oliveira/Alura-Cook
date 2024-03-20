import { writable } from "svelte/store";

const  { subscribe, set, update } = writable<string[]>([]);

export const minhaLista = {
    subscribe,
    set,
    adicionarIngrediente(ingrediente: string) {
        update((value) => [...value, ingrediente])
    },
    removerIngrediente(ingrediente: string){
        update(
            (value) => value.filter(
                (item) => item !== ingrediente
            ))
    }
}