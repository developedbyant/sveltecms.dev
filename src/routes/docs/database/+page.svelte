<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Database";data.description="Database utils file to create,update and delete from your db."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code

</script>

<Header type="h1" text="Database" />
<Text>The <InlineCode code="svelteCMS/lib/database.server.ts"/> util file help create,update and delete object from your database fully type safe.<br></Text>
<Space />
<Header type="h2" text="How to use it" />
<Text>Start by import <InlineCode code="Database"/> it from <InlineCode code="svelteCMS/lib/database.server"/>.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Database </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;svelteCMS/lib/database.server&quot;</span></span>
<span class="line"><span style="color: var(--shiki-token-comment)">// or</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; Insert</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">Update</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">Delete</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">Find } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;svelteCMS/lib/database.server&quot;</span></span></code></pre></Code>
<Space />
<Header type="h2" text="Example" />
<Text>Let's find a post with the slug "test" and return slug and title.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Database </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;svelteCMS/lib/database.server&quot;</span></span>
<span class="line added"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">post</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">await</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">Database</span><span style="color: var(--shiki-token-function)">.Find</span><span style="color: var(--shiki-color-text)">(&#123; slug</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;test&quot;</span><span style="color: var(--shiki-color-text)"> }</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">&#123; slug</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">title</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-constant)">true</span><span style="color: var(--shiki-color-text)"> })</span><span style="color: var(--shiki-token-comment)"></span></span></code></pre></Code>