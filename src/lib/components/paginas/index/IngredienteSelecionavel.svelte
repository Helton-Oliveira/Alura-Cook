<script lang="ts">
    import Tag from "../../compartilhados/Tag.svelte";
    import { minhaLista } from "$lib/stores/minhaLista";

    export let ingrediente: string;

    $: selecionado = $minhaLista.includes(ingrediente);

    function aoClicar() {
        if(!selecionado) {
            minhaLista.adicionarIngrediente(ingrediente)
        } else {
            minhaLista.removerIngrediente(ingrediente)
        }
    }

</script>

<button on:click={aoClicar}>
    <Tag ativa={selecionado}>{ ingrediente }</Tag>
</button>

<style>
    button{
        cursor: pointer;
    }
</style>