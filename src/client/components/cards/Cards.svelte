<script lang="ts">
    import type { CardData } from "client/types";
    export let data:CardData[]
    import Card from "./Card.svelte";
</script>

<div class="cards">
    {#each data as cardData}
        <Card  data={cardData}/>
    {/each}
</div>

<style>
    .cards{
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin: 50px 0;
        flex-wrap: wrap;
    }
</style>