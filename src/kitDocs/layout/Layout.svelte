<script lang="ts">
    export let showSides:boolean = true
    export let data:PageData
    import"../assets/global.css"
    import"../assets/code.css"
    import { page } from "$app/stores";
    import { metaTagsStore } from "kitDocs";
    import Nav from "./Nav.svelte";
    import SideNav from "./SideNav.svelte";
    import OnPageLinks from "./OnPageLinks.svelte";
    import PageNav from "./PageNav.svelte";
    // images
    import backdropImageSrc from "svelteCMS/images/backdrop.png"
    import faviconImageSrc from "svelteCMS/images/favicon.png"
    import type { PageData } from "../../../.svelte-kit/types/src/routes/$types"
    let theme:"dark"|"light" = "dark"

    /** Change theme color */
    async function handleThemeChange(e:any) {
        const newTheme:"dark"|"light" = e.detail
        theme = newTheme
    }
    $: console.log(data)
    // set mete tags
    $: url = $page.url.href
    $: appName = $metaTagsStore.appName
    $: favicon = $metaTagsStore.favicon ? $metaTagsStore.favicon : faviconImageSrc
    $: ogType = $metaTagsStore.ogType ? $metaTagsStore.ogType:"website" 
    $: title = $metaTagsStore.title ? `${$metaTagsStore.title} | ${appName}`:`${appName} | All in one svelte cms` 
    $: description = $metaTagsStore.description ? $metaTagsStore.description:"All in one cms for your svelte and sveltekit projects." 
    $: image = $metaTagsStore.image ? $metaTagsStore.image: backdropImageSrc
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content="FinOnX | Finance on X" />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
</svelte:head>

<div class="kitdocs" class:light={theme==="light"}>
    <Nav on:themeChange={handleThemeChange}/>
    <div class="appContent">
        {#if showSides}
            <SideNav />
        {/if}
        <main>
            <slot />
            <PageNav />
        </main>
        {#if showSides}
            <OnPageLinks />
        {/if}
    </div>
</div>

<style>
    .kitdocs{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: var(--app-bg);
    }
    .appContent{
        flex: 1;
        display: flex;
        justify-content: space-between;
        max-width: var(--max-width);
        width: 95%;
        margin: auto;
        gap: 50px;
        overflow-y: scroll;
        padding: 10px 0;
    }
    .appContent::-webkit-scrollbar{
        display: none;
    }
    main{
        flex: 1;
    }
</style>