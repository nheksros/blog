import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.7104966c.js";const u=JSON.parse('{"title":"BEM命名方式","description":"","frontmatter":{},"headers":[],"relativePath":"articles/css/BEM命名方式和layout布局.md","filePath":"articles/css/BEM命名方式和layout布局.md","lastUpdated":1697120886000}'),p={name:"articles/css/BEM命名方式和layout布局.md"},o=l(`<h1 id="bem命名方式" tabindex="-1">BEM命名方式 <a class="header-anchor" href="#bem命名方式" aria-label="Permalink to &quot;BEM命名方式&quot;">​</a></h1><h2 id="bem的介绍" tabindex="-1">BEM的介绍 <a class="header-anchor" href="#bem的介绍" aria-label="Permalink to &quot;BEM的介绍&quot;">​</a></h2><p>BEM（Block, Element, Modifier）是一种流行的CSS命名方法，用于创建可重用的组件并减少样式冲突。在Element UI中，我们可以看到BEM命名方法的应用。</p><ul><li><p><strong>Block（块）</strong>：这是一个独立的实体，它本身是有意义的。例如，<code>el-button</code>，<code>el</code>是命名空间，<code>button</code>是块名，表示一个按钮组件。</p></li><li><p><strong>Element（元素）</strong>：这是块内部的一个组成部分，它没有独立的意义，只能在某个块的上下文中使用。元素名通过双下划线与块名连接。例如，<code>el-menu__item</code>，<code>menu</code>是块名，<code>item</code>是元素名，表示菜单组件中的一个项目。</p></li><li><p><strong>Modifier（修饰符）</strong>：这是一个标志，用于创建块或元素的变体。修饰符名通过单下划线与块名或元素名连接。例如，<code>el-button--primary</code>，<code>button</code>是块名，<code>primary</code>是修饰符名，表示主要的按钮样式。</p></li></ul><p>使用BEM命名方法，可以使CSS更加清晰、有组织，同时也方便团队协作和代码维护。</p><h2 id="用less实现bem命名方式" tabindex="-1">用less实现BEM命名方式 <a class="header-anchor" href="#用less实现bem命名方式" aria-label="Permalink to &quot;用less实现BEM命名方式&quot;">​</a></h2><p><a href="https://less.bootcss.com/#%E6%A6%82%E8%A7%88" target="_blank" rel="noreferrer">less教程</a></p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ra-block&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        Block</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ra-block__element&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            Element</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ra-block--modifier&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            Modifier</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;ts&#39;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">.ra-block</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&amp;__element</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">&amp;--modifier</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">green</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ra-block&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        Block</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ra-block__element&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            Element</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ra-block--modifier&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            Modifier</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;ts&#39;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">.ra-block</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">red</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&amp;__element</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">&amp;--modifier</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">green</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="用scss实现bem命名方式" tabindex="-1">用scss实现BEM命名方式 <a class="header-anchor" href="#用scss实现bem命名方式" aria-label="Permalink to &quot;用scss实现BEM命名方式&quot;">​</a></h2><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">$block-sel</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;-&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$element-sel</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;__&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$modifier-sel</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;--&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$namespace</span><span style="color:#E1E4E8;">:</span><span style="color:#9ECBFF;">&#39;ra&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!default</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">//混入</span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$block</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#FFAB70;">$B</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$namespace</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$block-sel</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">$block</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//变量</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">.</span><span style="color:#FFAB70;">#{$B}</span><span style="color:#E1E4E8;">{ </span><span style="color:#6A737D;">//插值语法#{}</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span><span style="color:#F97583;">@content</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">//内容替换</span></span>
<span class="line"><span style="color:#E1E4E8;">   }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$element</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">$selector</span><span style="color:#E1E4E8;">:&amp;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">#{$selector </span><span style="color:#F97583;">+</span><span style="color:#FFAB70;"> $element-sel </span><span style="color:#F97583;">+</span><span style="color:#FFAB70;"> $element}</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">@content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@mixin</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">m</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$modifier</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">$selector</span><span style="color:#E1E4E8;">:&amp;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">@at-root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">#{$selector </span><span style="color:#F97583;">+</span><span style="color:#FFAB70;"> $modifier-sel </span><span style="color:#F97583;">+</span><span style="color:#FFAB70;"> $modifier}</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">@content</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">$block-sel</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;-&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!default</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$element-sel</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;__&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!default</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$modifier-sel</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;--&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!default</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#E36209;">$namespace</span><span style="color:#24292E;">:</span><span style="color:#032F62;">&#39;ra&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!default</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">//混入</span></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">b</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$block</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#E36209;">$B</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$namespace</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$block-sel</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#E36209;">$block</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//变量</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">.</span><span style="color:#E36209;">#{$B}</span><span style="color:#24292E;">{ </span><span style="color:#6A737D;">//插值语法#{}</span></span>
<span class="line"><span style="color:#24292E;">     </span><span style="color:#D73A49;">@content</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">//内容替换</span></span>
<span class="line"><span style="color:#24292E;">   }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$element</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">$selector</span><span style="color:#24292E;">:&amp;;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">#{$selector </span><span style="color:#D73A49;">+</span><span style="color:#E36209;"> $element-sel </span><span style="color:#D73A49;">+</span><span style="color:#E36209;"> $element}</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">@content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@mixin</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">m</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$modifier</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">$selector</span><span style="color:#24292E;">:&amp;;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">@at-root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">#{$selector </span><span style="color:#D73A49;">+</span><span style="color:#E36209;"> $modifier-sel </span><span style="color:#D73A49;">+</span><span style="color:#E36209;"> $modifier}</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">@content</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>使用方式：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">scss</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">b</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">red</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">e</span><span style="color:#E1E4E8;">(element){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">m</span><span style="color:#E1E4E8;">(modifier){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">green</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">scss</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">b</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">block</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">red</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">e</span><span style="color:#24292E;">(element){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">m</span><span style="color:#24292E;">(modifier){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">green</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,12),e=[o];function c(r,t,E,y,i,b){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{u as __pageData,F as default};
