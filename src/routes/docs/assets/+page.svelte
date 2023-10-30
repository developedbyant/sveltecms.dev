<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Assets";data.description="create,add,delete assets."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Link from 'kitDocs/components/Link.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Warning from 'kitDocs/components/Warning.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code
import Terminal from "client/components/Terminal.svelte";
</script>

<Header type="h1" text="Assets" />
<Text>svelteCMS make it easy to manage your assets, navigate to <InlineCode code="/admin/assets"/> and you can view,upload and delete assets.<br>
You can use asset providers like <Link href="https://cloudinary.com/">Cloudinary</Link> and others.</Text>
<Space />
<Warning>Before uploading assets, make sure to add a asset provider.</Warning>
<Space />
<Header type="h2" text="Add asset providers" />
<Text>To add a new asset provider, navagate to you <InlineCode code="/admin/setting"/> and click the <InlineCode code="add new"/> button.<br>
Current asset data</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">type</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">AssetData</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    _id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">ObjectId</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    provider</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;cloudinary&quot;</span><span style="color: var(--shiki-token-keyword)">|</span><span style="color: var(--shiki-token-string-expression)">&quot;app&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    src</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    title</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    type</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    extension</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">string</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">}</span></span></code></pre></Code>