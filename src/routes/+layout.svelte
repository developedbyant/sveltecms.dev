<script lang="ts">
    export let data
    import { page } from "$app/stores";
    import"kitDocs/style.css"
    import Layout from "kitDocs/Layout.svelte";
    $: showSides = $page.url.pathname.startsWith("/docs")
</script>

<!-- if we are viewing /admin, hide kitDocs layout -->
{#if $page.url.pathname.startsWith("/admin")}
    <slot />
{:else}
    <!-- your project layout -->
    <Layout {data} {showSides}>
        <slot />
    </Layout>
{/if}
