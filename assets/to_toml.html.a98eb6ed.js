import{_ as s,o as n,c as o,a as t,t as e,d as r,e as c}from"./app.c5d51af0.js";const p={},i={id:"frontmatter-title",tabindex:"-1"},l=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to toml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs an TOML string representing the contents of this table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>foo bar<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> to toml
</code></pre></div>`,5);function _(a,m){return n(),o("div",null,[t("h1",i,[l,d,t("code",null,e(a.$frontmatter.title),1)]),t("div",u,e(a.$frontmatter.usage),1),h])}var g=s(p,[["render",_],["__file","to_toml.html.vue"]]);export{g as default};