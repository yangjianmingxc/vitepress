import{_ as n,c as a,a2 as p,o as e}from"./chunks/framework.ga-08DTp.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"js-base/任务/任务管理.md","filePath":"js-base/任务/任务管理.md"}'),l={name:"js-base/任务/任务管理.md"};function t(i,s,c,o,d,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h2 id="任务管理" tabindex="-1">任务管理 <a class="header-anchor" href="#任务管理" aria-label="Permalink to &quot;任务管理&quot;">​</a></h2><p> Js最大的特点就是单线程，也就是说同一时间只能处理一个任务。为了协调事件、用户交互、脚本、UI渲染和网络处理等行为，防止主线程不阻塞，（事件循环）<code>Event Loop</code>的方案应用而生。</p><p>Js处理任务是在等待任务、执行任务、休眠等待新任务中不断循环中，也称这种机制为事件循环。</p><ul><li>主线程中的任务完成后，才会执行任务列队中的任务</li><li>有新任务到来时会将其放入列队，采取先进先执行的策略执行列队中的任务</li><li>比如多个 <code>setTimeout</code> 同时到时间了，就要依次执行</li></ul><p>任务包括<code>script</code>(整体代码)、<code>setTimeout</code>、<code>setInterval</code>、<code>DOM渲染</code>、<code>DOM事件</code>、<code>Promise</code>、<code>XMLHTTPREQUEST</code>等</p><h3 id="分析宏任务与微任务案例" tabindex="-1">分析宏任务与微任务案例 <a class="header-anchor" href="#分析宏任务与微任务案例" aria-label="Permalink to &quot;分析宏任务与微任务案例&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.log(&#39;hello world&#39;)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;定时器&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>Promise.resolve().then(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise1&#39;)</span></span>
<span class="line"><span>}).then(() =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;promise2&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;script end&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 输出结果</span></span>
<span class="line"><span>hello world</span></span>
<span class="line"><span>script end</span></span>
<span class="line"><span>promise1</span></span>
<span class="line"><span>promise2</span></span>
<span class="line"><span>定时器</span></span></code></pre></div><h3 id="脚本加载" tabindex="-1">脚本加载 <a class="header-anchor" href="#脚本加载" aria-label="Permalink to &quot;脚本加载&quot;">​</a></h3><p>引擎在执行任务的时候不会进行DOM渲染，所以要把<code>script</code>放在 <code>body</code> 标签之后，这样可以让DOM先渲染</p><h3 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h3><p>定时器会放入异步任务列队中，也是需要等同步任务完成后才会执行</p><p>比如定时器设置了6毫秒执行，如果主线程代码执行10毫秒，定时器也会等主线程结束后才会执行</p><p>HTML标准规定最小时间不能低于4毫秒，有些异步如DOM操作最低是16毫秒，总之把时间设置大些对性能好</p><p>下面代码会先输出 scipt 再输出 setTimeout</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>	console.log(&#39;setTimeout&#39;)</span></span>
<span class="line"><span>}, 0)</span></span>
<span class="line"><span>console.log(&#39;script&#39;)</span></span></code></pre></div><h3 id="微任务" tabindex="-1">微任务 <a class="header-anchor" href="#微任务" aria-label="Permalink to &quot;微任务&quot;">​</a></h3><p>微任务一般是由用户代码产生，微任务的优先级要大于宏任务，<code>Promise.then</code>是典型的微任务，实例化<code>Promise</code>时执行的代码是同步的，then 注册的回调函数是异步的（微任务）</p><p>任务执行的顺序是同步任务、微任务、宏任务所以一下执行的顺序是1、2、3、4</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>	console.log(4)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>	resolve()</span></span>
<span class="line"><span>	console.log(1)</span></span>
<span class="line"><span>}).then(() =&gt; {</span></span>
<span class="line"><span>	console.log(3)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(2)</span></span></code></pre></div><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><h5 id="进度条" tabindex="-1"><p>进度条</p> <a class="header-anchor" href="#进度条" aria-label="Permalink to &quot;&lt;p&gt;进度条&lt;/p&gt;&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      body {</span></span>
<span class="line"><span>        padding: 30px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      #app {</span></span>
<span class="line"><span>        height: 30px;</span></span>
<span class="line"><span>        line-height: 30px;</span></span>
<span class="line"><span>        width: 0;</span></span>
<span class="line"><span>        background: yellowgreen;</span></span>
<span class="line"><span>        text-align: center;</span></span>
<span class="line"><span>        font-weight: bold;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>  &lt;script&gt;</span></span>
<span class="line"><span>    function viewFn() {</span></span>
<span class="line"><span>      let i = 0;</span></span>
<span class="line"><span>      (function handle() {</span></span>
<span class="line"><span>        const id = document.getElementById(&quot;app&quot;);</span></span>
<span class="line"><span>        console.log(&#39;id :&gt;&gt;&#39;, id)</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        id.innerHTML = i + &quot;%&quot;;</span></span>
<span class="line"><span>        id.style.width = i + &quot;%&quot;;</span></span>
<span class="line"><span>        if(i++ &lt; 100) {</span></span>
<span class="line"><span>            setTimeout(handle, 100)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    viewFn()</span></span>
<span class="line"><span>    console.log(&#39;定时器开始...&#39;)</span></span>
<span class="line"><span>  &lt;/script&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h5 id="任务分解" tabindex="-1">任务分解 <a class="header-anchor" href="#任务分解" aria-label="Permalink to &quot;任务分解&quot;">​</a></h5><p>一个比较耗时的任务可能造成浏览器卡死现象，所以可以把任务拆分成多个小的异步任务执行。下面是一个数字统计的函数，运行时间特别长：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function numFn(num) {</span></span>
<span class="line"><span>		let count = 0 </span></span>
<span class="line"><span>		for(let = 0; i &lt;= num; i++) {</span></span>
<span class="line"><span>			count = count + i</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let num = 987654321</span></span>
<span class="line"><span>numFn(num)</span></span></code></pre></div><p>现在把任务分解成小块放入到任务队列，浏览器就不会出现卡死现象，不也不会影响后续代码的执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>console.time(&#39;runtime&#39;)</span></span>
<span class="line"><span>let count = 0</span></span>
<span class="line"><span>let num = 321</span></span>
<span class="line"><span>function hd() {</span></span>
<span class="line"><span>    console.log(&#39;count&#39;, count)</span></span>
<span class="line"><span>    for (let i = 0; i &lt; 100; i++) {</span></span>
<span class="line"><span>        if (num &lt;= 0) break</span></span>
<span class="line"><span>        // 等效于 count = count + num; 然后 num = num - 1</span></span>
<span class="line"><span>        count += num--</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (num &gt; 0) {</span></span>
<span class="line"><span>        setTimeout(hd)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        console.log(&#39;num&#39;, num)</span></span>
<span class="line"><span>        console.log(&#39;count&#39;, count)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>hd()</span></span>
<span class="line"><span>console.log(&#39;houdunren.com&#39;) //立刻显示出来</span></span></code></pre></div><p>当然交给微任务处理是更好的选择</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>async function numFn(num) {</span></span>
<span class="line"><span>  const res = await Promise.resolve()</span></span>
<span class="line"><span>    .then(() =&gt; {	</span></span>
<span class="line"><span>        let count = 0</span></span>
<span class="line"><span>        for (let i = 0; i &lt;= num; i++) {</span></span>
<span class="line"><span>          count += num--</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return count</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch((err) =&gt; {})</span></span>
<span class="line"><span>  console.log(res)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>numFn(987654321)</span></span>
<span class="line"><span>console.log(&#39;script end&#39;)</span></span></code></pre></div>`,29)]))}const g=n(l,[["render",t]]);export{h as __pageData,g as default};
