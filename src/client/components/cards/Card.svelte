<script lang="ts">
    import type { CardData } from "client/types";
    export let data:CardData
</script>

<div class="card">
    <div class="data">
        <h2 class="title">{data.title}</h2>
        <p class="desc">{data.desc}</p>
        {#if false}
            <a href={data.href} {...data.linkAttrs} class="btn">Read more</a>
        {/if}
    </div>
    <div class="emoji">{data.emoji}</div>
</div>

<style>
    .card{
        flex-grow: 1;
        padding: 20px;
        width: calc(100% / 3 - 10px);
        border-radius: 5px;
        box-shadow: 1px 1px 4px rgba(0,0,0,.2);
        background-color: var(--card-bg);
        color: var(--card-text-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .data{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-right: 10px;
    }
    .title{
        font-size: 30px;
        font-weight: 800;
        color: var(--card-header-color);
        margin-bottom: 5px;
    }
    .desc{
        font-size: 14px;
        font-weight: 300;
        color: var(--card-text-color);
        margin-bottom: 10px;
    }
    .btn{
        width: fit-content;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 300;
        color: var(--button-color);
        background-color: var(--button-bg);
        box-shadow: 1px 1px 4px rgba(0,0,0,.1);
    }
    .emoji{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,.2);
        box-shadow: 1px 2px 4px rgba(0,0,0,.6);
        padding: 10px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    @media(max-width:1000px){
        .card{
            width: calc(100% / 2 - 10px);
        }
    }
    @media(max-width:700px){
        .card{
            width: 100%;
        }
    }
</style>