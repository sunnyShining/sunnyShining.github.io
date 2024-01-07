import{_ as a,c as e,o as t,R as n}from"./chunks/framework.YS-5hJ7A.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"基","7":"础"},"headers":[],"relativePath":"html/index.md","filePath":"html/index.md"}'),r={name:"html/index.md"},s=n('<h2 id="_1、块级标签与行级标签的区别" tabindex="-1">1、块级标签与行级标签的区别 <a class="header-anchor" href="#_1、块级标签与行级标签的区别" aria-label="Permalink to &quot;1、块级标签与行级标签的区别&quot;">​</a></h2><p>块级元素可以设置宽高，行级元素不能设置宽高（只能根据文字来设置，比较特殊的是img\\input是可以设置宽高）； 块级元素是独占一行，行级元素不行； 简单一句，行级标签占一块，块级标签独占一行；</p><h2 id="_2、为什么span是行级元素" tabindex="-1">2、为什么span是行级元素 <a class="header-anchor" href="#_2、为什么span是行级元素" aria-label="Permalink to &quot;2、为什么span是行级元素&quot;">​</a></h2><p>一个标签元素，真正决定一个它是否为一个行或者块级元素的真正原因是dispaly的属性，inline是行级，block是块级；在浏览器中，也正是这个属性决定了一个元素标签的行或者块级元素。我们可以把p标签设置成display：inline，这样就设置不了他的宽高.浏览器对标签是有预置属性值的，这既是为何span是行级标签，为何标签p标签默认有外边距</p><h2 id="_3、script-标签中-defer-和-async-的区别" tabindex="-1">3、script 标签中 defer 和 async 的区别 <a class="header-anchor" href="#_3、script-标签中-defer-和-async-的区别" aria-label="Permalink to &quot;3、script 标签中 defer 和 async 的区别&quot;">​</a></h2><p>defer 和 async 都是作用于 外链JS 的。对于 内部JS 是没有效果的。</p><p>defer 和 async 都是异步的，主要的区别在于执行顺序以及执行的时间。</p><p>async 标志的脚本文件一旦加载完成就会立即执行，并且不会按照书写顺序，谁下载好了就直接执行。所以适用于那些没有代码依赖顺序，并且没有 DOM操作 的脚本文件。</p><p>defer 标志的脚本文件会严格按照书写顺序执行，并且，会在 DOMContentLoaded 事件之前（也就是页面DOM加载完成时）执行。适用于有 DOM操作 ，或者是有代码依赖顺序的脚本文件。</p><h2 id="_4、简单描述从输入网址到页面显示的过程" tabindex="-1">4、简单描述从输入网址到页面显示的过程 <a class="header-anchor" href="#_4、简单描述从输入网址到页面显示的过程" aria-label="Permalink to &quot;4、简单描述从输入网址到页面显示的过程&quot;">​</a></h2>',10),i=[s];function o(d,c,p,_,l,h){return t(),e("div",null,i)}const u=a(r,[["render",o]]);export{m as __pageData,u as default};