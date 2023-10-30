<script lang="ts">
    import { metaTagsStore } from "kitDocs/stores";
    // set meta data
    metaTagsStore.update(data=>{ data.title="Introduction";data.description="Welcome to kitDocs learn how to install,update,handle layout,add alias and more."; return data })
    import Header from 'kitDocs/components/Header.svelte';
    import Text from 'kitDocs/components/Text.svelte';
    import Space from 'kitDocs/components/Space.svelte';
    import InlineCode from 'kitDocs/components/InlineCode.svelte';
    import Code from 'kitDocs/components/Code.svelte';
    // custom code

</script>

<Header type="h1" text="Introduction" />
<Text>Everything to learn about svelteCMS.</Text>
<Space />
<Header type="h2" text="What is svelteCMS ?" />
<Text>SvelteCMS presents a comprehensive solution for your SvelteKit projects, offering an integrated CMS experience. With the convenience of running your CMS and project within the same directory, you can seamlessly navigate between the two without the need to exit the directory.</Text>
<Space />
<Header type="h2" text="How to add to your project" />
<Text>To add svelteCMS to your project it's super simple, just run <InlineCode code="npx kitcms@latest"/> and it will install or update svelteCMS.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-comment)"># Add svelte</span></span>
<span class="line"><span style="color: var(--shiki-token-function)">npx</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string)">kitcms@latest</span></span></code></pre></Code>
<Text>Once added to your project, you will need to follow the following steps: add alias and Handle layout.</Text>
<Space />
<Header type="h3" text="Add svelteCMS alias" />
<Text>In your <InlineCode code="svelte.config.js"/> add the svelteCMS alias.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> adapter </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/adapter-node&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; vitePreprocess } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;@sveltejs/kit/vite&#39;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)">/** </span><span style="color: var(--shiki-token-keyword)">@type</span><span style="color: var(--shiki-token-comment)"> </span><span style="color: var(--shiki-token-function)">&#123;import(&#39;@sveltejs/kit&#39;).Config}</span><span style="color: var(--shiki-token-comment)"> */</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">config</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    preprocess</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">vitePreprocess</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    kit</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> &#123;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        adapter</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">adapter</span><span style="color: var(--shiki-color-text)">()</span><span style="color: var(--shiki-token-punctuation)">,</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        alias</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)">&#123;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">            svelteCMS</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;src/svelteCMS/*&quot;</span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    }</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">};</span></span>
<span class="line"><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> config;</span></span></code></pre></Code>
<Space />
<Header type="h2" text="Handle layout" />
<Text>To make sure your home project does not break svelteCMS layout, you can create a layout like this in your <InlineCode code="src/routes/+layout.svelte"/>.</Text>
<Code><pre class="shiki css-variables" style="background-color: var(--shiki-color-background)" tabindex="-1"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">lang</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;ts&quot;</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">let</span><span style="color: var(--shiki-color-text)"> data</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> &#123; page } </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;$app/stores&quot;</span><span style="color: var(--shiki-color-text)">; </span><span style="color: var(--shiki-token-comment)"></span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/style.css&quot;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">import</span><span style="color: var(--shiki-color-text)"> Layout </span><span style="color: var(--shiki-token-keyword)">from</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;kitDocs/Layout.svelte&quot;</span><span style="color: var(--shiki-color-text)">;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    $</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> showSides </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> $</span><span style="color: var(--shiki-token-constant)">page</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">url</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">pathname</span><span style="color: var(--shiki-token-function)">.startsWith</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;/docs&quot;</span><span style="color: var(--shiki-color-text)">)</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">script</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: var(--shiki-token-comment)">&lt;!-- if we are viewing /admin, hide kitDocs layout --&gt;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">&#123;#</span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)"> $</span><span style="color: var(--shiki-token-constant)">page</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">url</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">pathname</span><span style="color: var(--shiki-token-function)">.startsWith</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&quot;/admin&quot;</span><span style="color: var(--shiki-color-text)">)} </span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-keyword)">slot</span><span style="color: var(--shiki-color-text)"> /&gt; </span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">&#123;:</span><span style="color: var(--shiki-token-keyword)">else</span><span style="color: var(--shiki-color-text)">} </span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-comment)">&lt;!-- your project layout --&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">&#123;</span><span style="color: var(--shiki-color-text)">data</span><span style="color: var(--shiki-token-function)">}</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">&#123;</span><span style="color: var(--shiki-color-text)">showSides</span><span style="color: var(--shiki-token-function)">}</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">        &lt;</span><span style="color: var(--shiki-token-keyword)">slot</span><span style="color: var(--shiki-color-text)"> /&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-constant)">Layout</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line added"><span style="color: var(--shiki-color-text)">&#123;/</span><span style="color: var(--shiki-token-keyword)">if</span><span style="color: var(--shiki-color-text)">} </span></span></code></pre></Code>
<Text>This way you only show your project layout if you are not viewing <InlineCode code="/admin"/> pathname.</Text>
<Space />
<Header type="h2" text="How to update ?" />
<Text>The same way you install svelteCMS, it can be updated by running the same command <InlineCode code="npx kitcms@latest"/>.</Text>