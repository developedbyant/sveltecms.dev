---
layout: Introduction
title: Introduction
description: Welcome to kitDocs learn how to install,update,handle layout,add alias and more.
---
# Introduction
Everything to learn about svelteCMS.

## What is svelteCMS ?
SvelteCMS presents a comprehensive solution for your SvelteKit projects, offering an integrated CMS experience. With the convenience of running your CMS and project within the same directory, you can seamlessly navigate between the two without the need to exit the directory.

## How to add to your project
To add svelteCMS to your project it's super simple, just run `npx kitcms@latest` and it will install or update svelteCMS.
```bash
# Add svelte
npx kitcms@latest
```
Once added to your project, you will need to follow the following steps: add alias and Handle layout.

### Add svelteCMS alias
In your `svelte.config.js` add the svelteCMS alias.
```ts
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias:{
			svelteCMS:"src/svelteCMS/*"//[H]
		}
	}
};
export default config;
```

## Handle layout
To make sure your home project does not break svelteCMS layout, you can create a layout like this in your `src/routes/+layout.svelte`.
```svelte
<script lang="ts">
    export let data
    import { page } from "$app/stores"; //[H]
    import"kitDocs/style.css"
    import Layout from "kitDocs/Layout.svelte";
    $: showSides = $page.url.pathname.startsWith("/docs")
</script>

<!-- if we are viewing /admin, hide kitDocs layout -->
{#if $page.url.pathname.startsWith("/admin")} //[H]
    <slot /> //[H]
{:else} //[H]
    <!-- your project layout -->
    <Layout {data} {showSides}>
        <slot />
    </Layout>
{/if} //[H]
```
This way you only show your project layout if you are not viewing `/admin` pathname.

## How to update ?
The same way you install svelteCMS, it can be updated by running the same command `npx kitcms@latest`.