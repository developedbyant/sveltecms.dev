<script lang="ts">
    import { page } from "$app/stores";
    import kitDocs from "kitDocs";
    import ArrowLeftIcon from "kitDocs/icons/ArrowLeft.svelte";
    import ArrowRightIcon from "kitDocs/icons/ArrowRight.svelte";
    $: currentRoute = kitDocs.routes.find(data=>data.links.find(link=>link.href===$page.url.pathname)) as typeof kitDocs.routes[0]
    $: currLinkIndex = currentRoute ? currentRoute.links.findIndex(data=>data.href===$page.url.pathname) : 0
    $: prevLink = currentRoute ? currentRoute.links[currLinkIndex-1] : undefined
    $: nextLink = currentRoute ? currentRoute.links[currLinkIndex+1] : undefined
</script>

{#if currentRoute && (prevLink||nextLink)}
    <ul class="links">
        <div class="link">
            <span class="title">Previous</span>
            {#if prevLink}
                <a href={prevLink.href}>
                    <div class="icon">
                        <ArrowLeftIcon size="100%" />
                    </div>
                    {prevLink.title}
                </a>
            {/if}
        </div>
        <div class="link">
            <span class="title">Next</span>
            {#if nextLink}
                <a href={nextLink.href}>
                    {nextLink.title}
                    <div class="icon">
                        <ArrowRightIcon size="100%" />
                    </div>
                </a>
            {/if}
        </div>
    </ul>
{/if}


<style>
    .links{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    }
    .link{
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 18px;
        font-weight: 600;
    }
    .title{
        font-size: 20px;
        font-weight: 600;
        color: var(--header-color);
    }
    .link a {
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--text-color);
    }
    .link{
        align-items: flex-end;
    }
    .link:nth-child(2){
        align-items: flex-start;
    }
    .icon{
        width: 30px;
        height: 30px;
        fill: var(--button-color);
        background-color: var(--button-bg);
        border-radius: 50%;
        padding: 5px;
    }
</style>