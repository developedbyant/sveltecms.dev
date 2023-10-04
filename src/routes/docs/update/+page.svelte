<script lang="ts">
    import Page from "kitDocs/layout/Page.svelte";
    import Flex from "kitDocs/components/Flex.svelte";
    import Header from "kitDocs/components/Header.svelte";
    import Text from "kitDocs/components/Text.svelte";
    import Code from "kitDocs/components/Code.svelte";
    import InlineCode from "kitDocs/components/InlineCode.svelte";
</script>

<Page title="Update">
    <Header type="h2" text="How to update svelte cms"/>
    <Text>
        Updating svelteCMS it's super simple, just run the same command <InlineCode code="npx kitcms@latest"/> and it will install
        the latest version of svelteCMS.
    </Text>
</Page>