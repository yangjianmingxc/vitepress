import{_ as s,c as n,o as a,a3 as e}from"./chunks/framework.B4-s0397.js";const p="/vitepress-doc/assets/image-20240910133050958.Dr-Bl9mx.png",l="/vitepress-doc/assets/image-20240910133436815.DjnX3gsM.png",c="/vitepress-doc/assets/image-20240911181337691.DswKzyHk.png",f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js-base/Promise/Promise.md","filePath":"js-base/Promise/Promise.md"}'),o={name:"js-base/Promise/Promise.md"},t=e(`<h2 id="异步状态" tabindex="-1">异步状态 <a class="header-anchor" href="#异步状态" aria-label="Permalink to &quot;异步状态&quot;">​</a></h2><p><code>Promise</code> 可以理解为承诺，就像我们去 KFC 点餐服务员给我们一引取餐票，这就是承诺。如果餐做好了叫我们这就是成功，如果没有办法给我们做出食物这就是拒绝。</p><ul><li>一个 <code>Promise</code> 必须有一个<code>then</code>方法处理状态改变</li></ul><h4 id="状态说明" tabindex="-1">状态说明 <a class="header-anchor" href="#状态说明" aria-label="Permalink to &quot;状态说明&quot;">​</a></h4><p>Promise 包含<code>pending</code>、<code>fulfilled</code>(被履行)、<code>rejected</code>三种状态</p><ul><li><code>pending</code>指初始等待状态，初始化<code>promise</code>时候的状态</li><li><code>resolve</code>指已经解决，将<code>promise</code>状态设置为<code>fulfilled</code></li><li><code>reject</code>指拒绝处理，将<code>promise</code>状态设置为<code>rejected</code></li><li><code>promise</code>是生产者，通过<code>resolve</code>和<code>reject</code>函数告知结果</li><li><code>promise</code>非常适合需要一定执行时间的异步任务</li><li>状态一旦改变就不可更改</li></ul><p>promise 没用使用<code>resolve</code>和<code>reject</code>的时候状态是<code>pending</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p = new Promise((resolve,reject) =&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(p)</span></span></code></pre></div><p><img src="`+p+`" alt="image-20240910133050958"></p><p>当更改状态后</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p = new Promise((resolve,reject) =&gt; {</span></span>
<span class="line"><span>	resolve(&#39;ok&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(p)</span></span></code></pre></div><p><img src="`+l+`" alt="image-20240910133436815"></p><p><code>promise</code>创建时即执行同步任务，<code>then</code>会放在异步微任务中执行，需要等同步任务执行完成后才执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p = new Promise((resolve,reject) =&gt; {</span></span>
<span class="line"><span>	resolve(&#39;ok&#39;)</span></span>
<span class="line"><span>	console.log(&#39;resolve&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>p.then(res =&gt; {</span></span>
<span class="line"><span>	console.log(res)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;script end&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># resolve</span></span>
<span class="line"><span># script end</span></span>
<span class="line"><span># ok</span></span></code></pre></div><p><code>promise</code>代码都是在其他代码执行之后执行</p><ul><li><code>promise</code>的then、catch、finally的方法都是异步任务</li><li>程序需要将主任务执行完成后才会执行异步队列任务</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    resolve(&#39;success&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>p.then(alert)</span></span>
<span class="line"><span>alert(&#39;1&#39;)</span></span>
<span class="line"><span>p.then(() =&gt; {</span></span>
<span class="line"><span>    alert(&#39;2&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span># 1</span></span>
<span class="line"><span># success</span></span>
<span class="line"><span># 2</span></span></code></pre></div><p>下例在三秒后将<code>Promise</code>状态设置为<code>fulfilled</code>，然后执行<code>then</code>方法</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>	setTimeout(() =&gt; {</span></span>
<span class="line"><span>		resolve(&#39;fulfilled&#39;)</span></span>
<span class="line"><span>	}, 3000)</span></span>
<span class="line"><span>}).then(</span></span>
<span class="line"><span>	msg =&gt; {</span></span>
<span class="line"><span>		console.log(msg)</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	error =&gt; {</span></span>
<span class="line"><span>		console.log(error)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>状态被改变后就不能再修改了，下面先通过<code>resolve</code>改变为成功状态，表示<code>Promise</code>状态已经完成了，就不能再使用<code>reject</code>更改状态了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  	resolve(&#39;fulfilled&#39;)</span></span>
<span class="line"><span>  	reject(&#39;失败&#39;)</span></span>
<span class="line"><span>  }).then(</span></span>
<span class="line"><span>  	msg =&gt; {</span></span>
<span class="line"><span>  		console.log(msg)</span></span>
<span class="line"><span>  	},</span></span>
<span class="line"><span>  	error =&gt; {</span></span>
<span class="line"><span>  		console.log(error)</span></span>
<span class="line"><span>  	}</span></span>
<span class="line"><span>  )</span></span></code></pre></div><h4 id="动态改变" tabindex="-1">动态改变 <a class="header-anchor" href="#动态改变" aria-label="Permalink to &quot;动态改变&quot;">​</a></h4><p>下例中<code>p2</code>返回了<code>p1</code>所以此时p2状态已经无意义了，后面的<code>then</code>是对<code>p1</code>状态的处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const p1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>	resolve(&#39;fulfilled&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const p2 = new Promise(() =&gt; {</span></span>
<span class="line"><span>	resolve(p1)</span></span>
<span class="line"><span>}).then(</span></span>
<span class="line"><span>	res =&gt; {</span></span>
<span class="line"><span>		console.log(res)</span></span>
<span class="line"><span>	},</span></span>
<span class="line"><span>	error =&gt; {</span></span>
<span class="line"><span>		console.log(error)</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="then" tabindex="-1">then <a class="header-anchor" href="#then" aria-label="Permalink to &quot;then&quot;">​</a></h2><p>一个Promise需要提供一个<code>then</code>方法访问<code>promise</code>的结果</p><ul><li><code>then</code>方法必须返回<code>promise</code>，用户返回或者系统自动返回</li><li>第一个参数在<code>fulfilled</code>状态执行，即在<code>resolve</code>的时候<code>then</code>第一个函数处理成功状态</li><li>第二个参数在<code>rejected</code>状态执行，即在<code>reject</code>的时候<code>then</code>第二个函数处理失败状态，该函数为可选的，也可以用<code>catch</code>来处理失败的状态</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>let p1 = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>	reject(&#39;rejected&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then()</span></span>
<span class="line"><span>// .then(null, (f) =&gt; console.log(&#39;f&#39;,f)) //和catch都可以处理失败状态只存在一个即可</span></span>
<span class="line"><span>.catch(e =&gt; console.log(&#39;e&#39;,e))</span></span></code></pre></div><ul><li>两个函数都接收<code>promise</code>传出的值做为参数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>promise.then(onFulfilled, onRejected)</span></span></code></pre></div><h4 id="链式调用" tabindex="-1">链式调用 <a class="header-anchor" href="#链式调用" aria-label="Permalink to &quot;链式调用&quot;">​</a></h4><p><code>then</code>是对上个<code>promise</code>的处理，每个<code>then</code>都是全新的<code>promise</code>，默认传递<code>fulfilled</code>状态，不要认为上一个 <code>promise</code> 状态会影响以后 <code>then</code> 返回的状态</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  reject();</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then(</span></span>
<span class="line"><span>  resolve =&gt; console.log(&quot;fulfilled&quot;),</span></span>
<span class="line"><span>  reject =&gt; console.log(&quot;rejected&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.then(</span></span>
<span class="line"><span>  resolve =&gt; console.log(&quot;fulfilled&quot;),</span></span>
<span class="line"><span>  reject =&gt; console.log(&quot;rejected&quot;)</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>.then(</span></span>
<span class="line"><span>  resolve =&gt; console.log(&quot;fulfilled&quot;),</span></span>
<span class="line"><span>  reject =&gt; console.log(&quot;rejected&quot;)</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 执行结果如下</span></span>
<span class="line"><span>  ejected</span></span>
<span class="line"><span>  fulfilled</span></span>
<span class="line"><span>  fulfilled</span></span></code></pre></div><h2 id="catch" tabindex="-1">catch <a class="header-anchor" href="#catch" aria-label="Permalink to &quot;catch&quot;">​</a></h2><p>catch 用于失败状态的处理函数，等同于 <code>then(null,reject){}</code></p><ul><li>建议使用 <code>catch</code> 处理错误</li><li>将 <code>catch</code> 放在最后面用于统一处理前面发生的错误</li></ul><p><code>catch</code> 可以捕获之前所有 <code>promise</code> 的错误，所以建议将 <code>catch</code> 放在最后。下例中 <code>catch</code> 也可以捕获到了第一个 <code>then</code> 返回 的 <code>promise</code> 的错误。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  resolve();</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then(() =&gt; {</span></span>
<span class="line"><span>  return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    reject(&quot;.then &quot;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then(() =&gt; {})</span></span>
<span class="line"><span>.catch(msg =&gt; {</span></span>
<span class="line"><span>  console.log(msg);</span></span>
<span class="line"><span>});</span></span></code></pre></div><p>下面的在异步中<code>throw</code>将不会触发<code>catch</code>，而使用系统错误处理</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>   setTimeout(() =&gt; {</span></span>
<span class="line"><span>      throw new Error(&#39;fail&#39;)</span></span>
<span class="line"><span>   }, 2000)</span></span>
<span class="line"><span>}).catch((msg) =&gt; {</span></span>
<span class="line"><span>   console.log(msg + &#39;后盾人&#39;)</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><img src="`+c+`" alt="image-20240911181337691"></p><p>但是如果不在异步里面的catch是可以捕获到的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>   throw new Error(&#39;fail&#39;)</span></span>
<span class="line"><span>}).catch((msg) =&gt; {</span></span>
<span class="line"><span>   console.log(msg + &#39;test&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 返回 fail：test</span></span></code></pre></div><h2 id="finally" tabindex="-1">finally <a class="header-anchor" href="#finally" aria-label="Permalink to &quot;finally&quot;">​</a></h2><p>无论状态是<code>resolve</code> 或 <code>reject</code> 都会执行此动作，<code>finally</code> 与状态无关</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const promise = new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>  reject(&quot;fail&quot;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.then(msg =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;resolve&quot;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.catch(msg =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;reject&quot;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>.finally(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;resolve/reject状态都会执行&quot;)</span></span>
<span class="line"><span>});</span></span></code></pre></div><h2 id="实例操作" tabindex="-1">实例操作 <a class="header-anchor" href="#实例操作" aria-label="Permalink to &quot;实例操作&quot;">​</a></h2>`,47),i=[t];function d(r,h,g,u,m,v){return a(),n("div",null,i)}const k=s(o,[["render",d]]);export{f as __pageData,k as default};
