<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { page } from "$app/stores";
    import logoSrc from "kitDocs/assets/logo.png"
    import kitDocs from "kitDocs";
    // icons
    import MoonIcon from "kitDocs/icons/Moon.svelte"
    import SunIcon from "kitDocs/icons/Sun.svelte"
    import GithubIcon from "kitDocs/icons/Github.svelte"
    import SearchIcon from "kitDocs/icons/Search.svelte"
    import TwitterXIcon from "kitDocs/icons/TwitterX.svelte"

    const dispatch = createEventDispatcher()
    let theme:"dark"|"light" = "dark"

    /** change theme mode */
    function setTheme(){
        theme = theme==="dark" ? "light" : "dark"
        dispatch("themeChange",theme)
    }
</script>

<header class="mainNavHeader">
    <nav class="mainNav">
        <a href="/" class="logo">
            <img src={logoSrc} alt="logo">
        </a>
        <ul class="navLinks">
            {#each kitDocs.navLinks as navLink}
                <li><a href={navLink.href} class="navLink" class:active={navLink.href===$page.url.pathname} target={navLink.external?"_blank":""}>
                    {navLink.text}
                </a></li>
            {/each}
        </ul>
        <div class="search">
            <div class="icon"><SearchIcon /></div>
            <input type="text" placeholder="search...">
        </div>
        <div class="rightMenu">
            {#if kitDocs.socialMedias.twitter}
                <a href={kitDocs.socialMedias.twitter} target="_blank" class="iconBtn"><TwitterXIcon size=25/></a>
            {/if}
            {#if kitDocs.socialMedias.github}
            <a href={kitDocs.socialMedias.github} target="_blank" class="iconBtn"><GithubIcon size=25/></a>
            {/if}
            <button class="iconBtn" on:click={setTheme}>
                {#if theme==="dark"}<MoonIcon size=25/> {:else} <SunIcon size=25/>{/if}
            </button>
        </div>
    </nav>
</header>

<style>
    .mainNavHeader {
        backdrop-filter: blur(5px);
        position: sticky;
        top: 0; left: 0;
        border-bottom: 1px solid var(--border-color);
    }
    .mainNav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;
        max-width: var(--max-width);
        width: 95%;
        margin: auto;
        gap: 20px;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .logo img{
        object-fit: cover;
        object-position: center;
        width: auto;
        height: 40px;
    }
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        fill: var(--icon-color);
    }
    .search{
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: var(--search-bg);
        border: 1.5px solid var(--border-color);
        transition: box-shadow ease-in-out 0.1s;
    }
    .search:focus-within{
        box-shadow: 0 0 1px 1px var(--border-color);
    }
    .search input,.search input::placeholder{
        cursor: pointer;
        background-color: transparent;
        border: none;
        font-size: 15px;
        font-weight: 400;
        color: var(--search-color);
    }
    .search input:focus{ outline: none; }
    .navLinks{
        flex: 1;
        display: flex;
        align-items: center;
        list-style: none;
        gap: 15px;
    }
    .navLink{
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        color: var(--nav-link-color);
        padding: 1px 6px;
    }
    .navLink.active,.navLink:hover{
        background-color: var(--nav-link-hover-color);
        border-radius: 5px;
    }
    .rightMenu{
        display: flex;
        align-items: center;
        gap: 15px;
        border-left: 1.5px solid var(--border-color);
        padding-left: 20px;
    }
    .iconBtn{
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        fill: var(--icon-color);
    }
</style>