<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { page } from "$app/stores";
    import { appStore } from "client/stores";
    import logoSrc from "kitDocs/assets/logo.png"
    import kitDocs from "kitDocs";
    import Burger from "./Burger.svelte";
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

    /** close nav when user click link*/
    const closeNav = ()=> appStore.update(data=>{ data['navIsOpen']=false ; return data})
</script>

<header class="mainNavHeader">
    <nav class="mainNav">
        <a href="/" class="logo">
            <img src={logoSrc} alt="logo">
        </a>
        <ul class="navLinks" class:open={$appStore.navIsOpen}>
            {#each kitDocs.navLinks as navLink}
                <li class="navLink" class:active={navLink.href===$page.url.pathname || navLink.href.split("/")[1]===$page.url.pathname.split("/")[1]}>
                    <a href={navLink.href} target={navLink.external?"_blank":""} on:click={closeNav}>
                        {navLink.text}
                    </a>
                </li>
            {/each}
        </ul>
        <div class="search">
            <div class="icon"><SearchIcon size="100%"/></div>
            <input type="text" placeholder="search...">
        </div>
        <div class="rightMenu">
            {#if kitDocs.socialMedias.twitter}
                <a href={kitDocs.socialMedias.twitter} target="_blank" class="iconBtn pc"><TwitterXIcon size="100%"/></a>
            {/if}
            {#if kitDocs.socialMedias.github}
                <a href={kitDocs.socialMedias.github} target="_blank" class="iconBtn pc"><GithubIcon size="100%"/></a>
            {/if}
            <button class="iconBtn" on:click={setTheme}>
                {#if theme==="dark"}<MoonIcon size="100%"/> {:else} <SunIcon size="100%"/>{/if}
            </button>
        </div>
        <Burger />
    </nav>
</header>

<style>
    .mainNavHeader {
        backdrop-filter: blur(5px);
        position: sticky;
        top: 0; left: 0;
        border-bottom: 1px solid var(--border-color);
        position: relative;
        z-index: 1;
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
        width: 20px;
        height: 20px;
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
        width: 100%;
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
    .navLink a{
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
        width: 30px;
        height: 30px;
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        fill: var(--icon-color);
    }
    /* on mobile */
    @media(max-width:700px){
        .search{ flex: 1;}
        .pc{ display: none; }
        .navLinks{
            position: absolute;
            padding: 0 0 10px 0;
            top: 100%;
            left: 0;
            width: 100%;
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
            background-color: #1d2b41;
            border-top: 1.5px solid var(--border-color);
            border-radius: 0 0 20px 20px;
            border-bottom: 2px solid var(--border-color);
            transition: all ease-in-out 0.2s;
            /* transition */
            opacity: 0%;
            transform: translateY(-30px);
            pointer-events: none;
        }
        .navLinks.open{
            opacity: 100%;
            transform: translateY(0);
            pointer-events: all;
        }
        .navLink.active,.navLink:hover{
            border-radius: 1px;
            width: 100%;
        }
    }
</style>