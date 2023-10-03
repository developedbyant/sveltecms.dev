<script>
    import clientData from "client";
    import Cards from "client/components/cards/Cards.svelte";
    import PageTitle from "client/components/PageTitle.svelte";
    import Terminal from "client/components/Terminal.svelte";
    import HomeHero from "client/components/HomeHero.svelte";
</script>

<HomeHero />
<Cards data={clientData.cards}/>
<PageTitle title="Get started"/>
<Terminal>npx kitcms@latest</Terminal>