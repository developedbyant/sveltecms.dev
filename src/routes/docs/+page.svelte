<script lang="ts">
    import Page from "kitDocs/layout/Page.svelte";
    import Warning from "client/components/Warning.svelte";
    import Header from "kitDocs/components/Header.svelte";
    import Text from "kitDocs/components/Text.svelte";
    import InlineCode from "kitDocs/components/InlineCode.svelte";
    import Terminal from "client/components/Terminal.svelte";
</script>

<Page title="Introduction">
    <Warning />
    <Header type="h2" text="Before we begin"/>
    <Text>
        Before running <InlineCode code="npx kitcms@latest"/> make sure you have initialize a sveltekit project with TypeScript
    </Text>
    <Header type="h2" text="What is svelteCMS"/>
    <Text>
        SvelteCMS presents a comprehensive solution for your SvelteKit projects, 
        offering an integrated CMS experience. With the convenience of running your CMS and project within the same directory, 
        you can seamlessly navigate between the two without the need to exit the directory.
    </Text>
    <Header type="h2" text="Quick start"/>
    <Text>To add svelte cms to your project, just run the <InlineCode code="npx kitcms@latest"/> from your project directory</Text>
    <!-- <Code lang="bash" code="npx kitcms@latest"/> -->
    <Terminal>npx kitcms@latest</Terminal>
</Page>