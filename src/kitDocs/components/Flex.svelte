<script lang="ts">
    export let direction:"column"|"row" = "column"
</script>

<div class="flex" style="flex-direction: {direction};">
    <slot />
</div>

<style>
    .flex{
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
</style>