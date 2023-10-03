<script lang="ts">
    import { page } from "$app/stores";
    import kitDocs from "kitDocs";
    // $: currentRoute = kitDocs.routes.find(data=>data.pathname===$page.url.pathname) as typeof kitDocs.routes[0]
</script>

<!-- {#if currentRoute} -->
    <aside>
        <ul class="links">
            {#each kitDocs.routes as route}
            <div class="linkWrap">
                <span class="title">{route.title}</span>
                <ul class="subLinks">
                    {#each route.links as link}
                        <li><a href={link.href} class="subLink" class:active={link.href===$page.url.pathname}>{link.title}</a></li>
                    {/each}
                </ul>
            </div>
            {/each}
        </ul>
    </aside>
<!-- {/if} -->

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
    .links{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .linkWrap{
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: relative;
        overflow: hidden;
    }
    .title{
        font-size: 20px;
        font-weight: 600;
        color: var(--header-color);
    }
    .title::after{
        background-color: var(--border-color);
        position: absolute;
        content: "";
        left: 0;
        height: 100%;
        top: 30px;
        width: 2px;
        border-radius: 10px;
    }
    .subLinks{
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .subLink{
        text-decoration: none;
        font-size: 17px;
        font-weight: 600;
        color: var(--nav-link-color);
        transition: color ease-in-out 0.3s;
    }
 
    .subLink{
        font-size: 15px;
        font-weight: 400;
    }
    .subLink.active{
        color: var(--main-color);
    }
</style>