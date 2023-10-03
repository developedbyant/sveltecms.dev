<script lang="ts">
    export let code:string
    export let lang:string
    import hljs from "highlight.js/lib/common"
    let btnText = "copy"
    let htmlCode = hljs.highlight(code.trim(),{ language:lang||"js" }).value
    /** Copy code to clipboard*/
    async function copyToClipboard() {
        btnText = "copied"
        await navigator.clipboard.writeText(code)
        // Set button text back to copy after 2 seconds
        setTimeout(()=>btnText="Copy",2000)
    }
</script>

<pre>
    <code class="language-{lang}">{@html htmlCode}</code>
    <button class="copy" on:click={copyToClipboard}>{btnText}</button>
</pre>

<style>
    pre{
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: var(--code-bg);
        border-radius: 10px;
        color: var(--code-text-color);
        font-size: 14px;
        font-weight: 400;
        padding: 10px;
        position: relative;
        margin-bottom: 10px;
    }
    .copy{
        border: none;
        background-color: #333638;
        color: white;
        cursor: pointer; 
        position: absolute;
        top: 0;
        right: 0;
        text-decoration: none;
        padding: 3px 5px;
        border-radius: 1px;
        font-size: 10px;
        font-weight: 300;
        margin-bottom: 5px;
        text-transform: uppercase;
    }
    
</style>