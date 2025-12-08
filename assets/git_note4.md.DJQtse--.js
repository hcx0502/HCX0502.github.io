import{_ as n,c as a,o as t,ah as p}from"./chunks/framework.B8DMMYNI.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"git/note4.md","filePath":"git/note4.md"}'),l={name:"git/note4.md"};function e(i,s,g,c,o,d){return t(),a("div",null,[...s[0]||(s[0]=[p(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>&lt;head&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;胡彩霞的网页&lt;/title&gt;</span></span>
<span class="line"><span>&lt;/head&gt;</span></span>
<span class="line"><span>&lt;body&gt;   所有的东西要写在body里面</span></span>
<span class="line"><span>   这是我的学习一    </span></span>
<span class="line"><span>   &lt;!-- 我的东西写在这里面;会显示在浏览器里面 --&gt;</span></span>
<span class="line"><span>   &lt;div&gt;111111111111111&lt;/div&gt;   </span></span>
<span class="line"><span>   &lt;!-- 块标签独占一行 --&gt;</span></span>
<span class="line"><span>   &lt;div sttyle=&quot;width:400px;hight:400px;border:10px ;solid red;&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>   &lt;!-- 行块标签不会独占一行可以挨在一起 --&gt;</span></span>
<span class="line"><span>   &lt;!-- 共同点是行块和块标签都可以设置宽高 --&gt;</span></span>
<span class="line"><span>   &lt;!-- 内联标签不会独占一行，不同点无法设置宽高 --&gt;</span></span>
<span class="line"><span>   &lt;!-- 属性应该写在&lt;&gt;里面  --&gt;</span></span>
<span class="line"><span>   &lt;a href=&quot;https://cn.bing.com/search?q=%E7%99%BE%E5%BA%A6&amp;form=ANNTH1&amp;refig=692ec7572e2c491184e6f0b83f12f284&amp;pc=LCTS&quot;&gt;我是一个a标签&lt;/a&gt;</span></span>
<span class="line"><span>   &lt;!-- 可以用来跳转网页或者地址--&gt;</span></span>
<span class="line"><span>&lt;!-- alt+shift+下光标快捷方式 --&gt;</span></span>
<span class="line"><span>   &lt;div&gt;3333333333&lt;/div&gt;</span></span>
<span class="line"><span>   &lt;br&gt;</span></span>
<span class="line"><span>   &lt;a href=&quot;D:\\图片\\Camera Roll&quot;&gt;我是一个跳转本地文件的地址&lt;/a&gt; </span></span>
<span class="line"><span>   &lt;br&gt;</span></span>
<span class="line"><span>   &lt;a href=&quot;D:\\图片\\Camera Roll\\2.jpg&quot;&gt;1000&lt;/a&gt;      </span></span>
<span class="line"><span>   &lt;!-- &quot;可以跳转到本地文件&quot; --&gt;</span></span>
<span class="line"><span>   &lt;br&gt;</span></span>
<span class="line"><span>    &lt;a href=&quot;&quot;&gt;我是准备被点击的A标签&lt;/a&gt;</span></span>
<span class="line"><span>    &lt;br&gt;</span></span>
<span class="line"><span>    &lt;a href=&quot;&quot;&gt;xccs&lt;/a&gt;&lt;br&gt;</span></span>
<span class="line"><span>    &lt;a href=&quot;https://dldir1.qq.com/qqtv/TencentVideo11.145.7728.0.exe?support_redirect=1&quot;download&gt;我是一个下载的a标签&lt;/a&gt;</span></span>
<span class="line"><span>&lt;h1&gt;111111111&lt;/h1&gt;</span></span>
<span class="line"><span>&lt;h2&gt;111111111&lt;/h2&gt;</span></span>
<span class="line"><span>&lt;h3&gt;111111111&lt;/h3&gt;</span></span>
<span class="line"><span>&lt;h4&gt;111111111&lt;/h4&gt;</span></span>
<span class="line"><span>&lt;h5&gt;111111111&lt;/h5&gt;</span></span>
<span class="line"><span>&lt;h6&gt;111111111&lt;/h6&gt;</span></span>
<span class="line"><span>&lt;!-- h1-h6为标题 --&gt;</span></span>
<span class="line"><span>&lt;p&gt;是段落独占一行作为一个文字段落&lt;/p&gt;</span></span>
<span class="line"><span>&lt;br&gt;</span></span>
<span class="line"><span>&lt;!-- 相当于回车 --&gt;</span></span>
<span class="line"><span>&lt;hr&gt;</span></span>
<span class="line"><span>&lt;!-- 水平线可以设置颜色和宽度，不设置高度就占一行 --&gt;</span></span>
<span class="line"><span>&lt;b&gt;加粗文字&lt;/b&gt;</span></span>
<span class="line"><span>&lt;i&gt;斜体文字&lt;/i&gt;</span></span>
<span class="line"><span>&lt;em&gt;定义着重文字斜体&lt;/em&gt;</span></span>
<span class="line"><span>&lt;!-- 重点 --&gt;</span></span>
<span class="line"><span>&lt;ol&gt;有序标签会自动在前面带序号使用&gt;可以进行标签的嵌套&lt;/ol&gt;</span></span>
<span class="line"><span>&lt;ol&gt;&gt;&lt;li&gt;111111111111&lt;/li&gt;</span></span>
<span class="line"><span>回车进行分割</span></span>
<span class="line"><span>&lt;li&gt;2222222222&lt;/li&gt;&lt;/ol&gt;</span></span>
<span class="line"><span>&lt;ol&gt;&lt;ul&gt;无序标签前面是一个实心点&lt;/ul&gt;&lt;/ol&gt;</span></span>
<span class="line"><span>&lt;!-- ul标签和li标签都要包裹在ol里面 --&gt;</span></span>
<span class="line"><span>&lt;table&gt;tr和td要嵌套在table里面使用&lt;/table&gt;</span></span>
<span class="line"><span>&lt;table border=&quot;10&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- table是表格的意思 --&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;!-- tr是行td是列td要写在tr里面 --&gt;</span></span>
<span class="line"><span>    &lt;td&gt;111111111&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;222222220&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;3333333333&lt;/td&gt;</span></span>
<span class="line"><span>     &lt;/tr&gt;</span></span>
<span class="line"><span>     &lt;tr&gt;</span></span>
<span class="line"><span>        &lt;td&gt;111111111&lt;/td&gt;</span></span>
<span class="line"><span>        &lt;td&gt;222222222&lt;/td&gt;</span></span>
<span class="line"><span>        &lt;td&gt;5555555555&lt;/td&gt;</span></span>
<span class="line"><span>     &lt;/tr&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span>
<span class="line"><span>&lt;table border=&quot;10&quot;&gt;</span></span>
<span class="line"><span>     &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td colspan=&quot;2&quot;&gt;7777777777&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;9999999999&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;8888888888&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>    &lt;td&gt;5555555555&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;6666666666666&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;td&gt;44444444444&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>&lt;!-- 在td后面加上colspan是横向合并 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 嵌套里面的东西要比最高级的位置要更加后面 --&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/table&gt;</span></span>
<span class="line"><span>&lt;input type=&quot;text&quot;&gt;</span></span>
<span class="line"><span>&lt;!-- 表单收集东西的 --&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div>`,1)])])}const u=n(l,[["render",e]]);export{h as __pageData,u as default};
