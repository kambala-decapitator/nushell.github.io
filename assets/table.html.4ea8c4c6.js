import{_ as n,o as t,c as o,a,t as s,d as r,e as c}from"./app.2fc09647.js";const i={},l={id:"frontmatter-title",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; table --start-number --list --width</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--start-number {int}</code>: row number to start viewing from</li><li><code>--list</code>: list available table modes/themes</li><li><code>--width {int}</code>: number of terminal columns wide (not output columns)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>List the files in current directory with index number start from 1.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> table -n <span class="token number">1</span>
</code></pre></div><p>Render data in table view</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> table
</code></pre></div>`,9);function m(e,b){return t(),o("div",null,[a("h1",l,[p,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",u,s(e.$frontmatter.usage),1),h])}var f=n(i,[["render",m],["__file","table.html.vue"]]);export{f as default};