/**
 * 自学vue+webpack基础
 */

 webpack 默认只打包js文件或模块, 不过我们可以通过loader来使webpack可以加载css、vue、图片等等模块或文件

 loader: 模块和资源的转换器
 	css-loader与style-loader 在require时需要 !css!style (为啥?加上就好,ok??)

 webpack.config.js   webpack位置文件



 //https://github.com/qxl1231/app_update_server.git
//https://github.com/vuejs/vue-resource


import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import { configRouter } from "./router.js"

//  引入  vue-router
Vue.use(VueRouter);
//  引入  vue-resource
Vue.use(VueResource);

//开启debug模式  便于看错
Vue.config.debug = true;

// new Vue(app);//新建一个vue实例，现在使用vue-router就不需要了。

// 正式开始
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
    history: true,
    saveScrollPosition: true
});


configRouter(router);

// 路由器需要一个根组件。
const App = Vue.extend(require('./components/app.vue'));


// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app');