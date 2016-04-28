learning webpack
================
## 什么是 webpack
<ol>
	<li>一个打包工具</li>
	<li>一个模块记载工具</li>
	<li>各种资源都可以当成模块来处理</li>
	<li><a href="http://webpack.github.io/">官网</a></li>
</ol>

## webpack 的优势
<ul>
	<li>将依赖树拆分, 保证按需加载</li>
	<li>保证初始加载的速度</li>
	<li>所有静态资源可以被模块化</li>
	<li>可以整合第三方的库和模块</li>
	<li>可以构造大系统</li>
</ul>
### 常用 loader
|             loader name     |  loader explanation                              |
|-----------------------------|--------------------------------------------------|
| <a href="https://www.npmjs.com/package/html-webpack-plugin">html-webpack-plugin</a> | 这个插件用来简化创建服务 webpack bundle 的 HTML 文件, 尤其是对于在文件名中包含了 hash 值, 而这个值在每次编译的时候都发生变化的情况。你既可以让这个插件来帮助你自动生成 HTML 文件 |