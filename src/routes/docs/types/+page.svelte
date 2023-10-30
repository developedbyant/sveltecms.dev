<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Types";data.description="Generated types by svelteCMS,."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
import Terminal from "client/components/Terminal.svelte";
</script>

<Header type="h1" text="Types" />
<Text>svelteCMS will generate types for your routes on dev mode, the generated types will saved to  <InlineCode code="svelteCMS/types/generated.ts"/>.<br>
Types help you understand your routes data types or blocks types.<br>
Generated output</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">TagsData</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    _id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">any</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    slug</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    altNames</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)">[]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">CategoriesData</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    _id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">any</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    slug</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    image</span><span style="color: var(--shiki-token-keyword)">:import</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;svelteCMS/types&quot;</span><span style="color: var(--shiki-color-text)">).</span><span style="color: var(--shiki-token-function)">AssetData</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ProductsData</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    _id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">any</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    slug</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    tags</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">TagsData</span><span style="color: var(--shiki-color-text)">[]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    categories</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-function)">CategoriesData</span><span style="color: var(--shiki-color-text)">[]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    variants</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)">&#123;key</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">value</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span><span style="color: var(--shiki-color-text)">}[]</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></Code>