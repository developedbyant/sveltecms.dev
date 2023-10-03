<script lang="ts">
    import { page } from "$app/stores";
    import kitDocs from "kitDocs";
    $: currentRoute = kitDocs.routes.find(data=>data.links.find(link=>link.href===$page.url.pathname)) as typeof kitDocs.routes[0]
    $: opPageLinks = currentRoute ? currentRoute.links.find(data=>data.href===$page.url.pathname)!.opPageLinks : []
</script>

{#if currentRoute && opPageLinks.length>0}  
    <aside class="onPage">
        <span class="onPageTitle">On page</span>
        <ul class="onPageLinks">
            {#each opPageLinks as link }
                <li><a href={link.href} class="onPageLink">
                    {link.text}
                </a></li>
            {/each}
        </ul>
    </aside>
{/if}

<style>
    aside{
        position: sticky;
        left: 0;
        top: 0;
        overflow-y: scroll;
    }
    aside::-webkit-scrollbar{
        display: none;
    }
    .onPage{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .onPageTitle{
        font-size: 18px;
        font-weight: 700;
        color: var(--header-color);
    }
    .onPageLinks{
        display: flex;
        flex-direction: column;
        list-style: none;
    }
    .onPageLink{
        font-size: 15px;
        font-weight: 500;
        text-decoration: none;
        color: var(--text-color);
    }
</style>