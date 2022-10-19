import{_ as t,o as r,c as o,a,t as e,d as n,e as p}from"./app.5e206425.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),i=n(),u=n(" for dataframe"),h={class:"command-title"},m=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; arg-sort --reverse --nulls-last</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--reverse</code>: reverse order</li><li><code>--nulls-last</code>: nulls ordered last</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns indexes for a sorted series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> arg-sort
</code></pre></div><p>Returns indexes for a sorted series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> arg-sort <span class="token parameter variable">-r</span>
</code></pre></div>`,9);function f(s,k){return r(),o("div",null,[a("h1",l,[d,i,a("code",null,e(s.$frontmatter.title),1),u]),a("div",h,e(s.$frontmatter.dataframe),1),m])}const g=t(c,[["render",f],["__file","arg-sort.html.vue"]]);export{g as default};