import{_ as s,o as n,c as a,V as l}from"./chunks/framework.747c9e80.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/2-typescript/2-任意类型.md","filePath":"articles/2-typescript/2-任意类型.md","lastUpdated":null}'),p={name:"articles/2-typescript/2-任意类型.md"},o=l(`<div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// any 任意类型 unknown 不知道的类型</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1.top type 顶级类型 any unknown</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2.Object</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 3.Number String Boolean</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4.number string boolean（小写）</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 5.  1   &#39;rarrot&#39;  false</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 6.never</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// unknown 只能赋值给自身 或者是any</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// unknown 没有办法读任何属性 方法也不可以调用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// unknown 比any更加安全，当不知道定义属性为什么类型时，优先使用unknown</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> rarrot</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">={</span><span style="color:#F07178;">牛逼</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">:()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//上面any换成unknown，下面console语句会报错</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">🚀 ~ file: index.ts:23 ~ rarrot:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> rarrot</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#A6ACCD;">())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="对象类型" tabindex="-1">对象类型 <a class="header-anchor" href="#对象类型" aria-label="Permalink to &quot;对象类型&quot;">​</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 大写object</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">123</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[]</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a3</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">={}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a4</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 小写object，仅支持引用类型，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 所以可以通过object将引用类型筛选出来，常用于泛型约束</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 报错，原始类型</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a1</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 报错，原始类型</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">=</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">// 报错，原始类型</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a3</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">[]        </span><span style="color:#676E95;font-style:italic;">// 正确</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a4</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">={}</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">// 正确</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a5</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">=()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 正确</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可以将{}理解为一个new Object，相当于原始类型</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> []</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rarrot</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a4</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#A6ACCD;">a3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 报错，不可以进行添加属性或者对属性进行重新赋值</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,3),e=[o];function t(c,r,y,D,C,F){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{A as __pageData,b as default};
