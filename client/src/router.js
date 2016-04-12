/**
 * 定义路由文件
 */
// 引入组件
import index from './components/app.vue';
import list from './components/list.vue';
import hello from './components/hello.vue';
import login from './components/login.vue';
import logout from './components/logout.vue';
import main from './components/main.vue'


export function configRouter (router) {
	// '/async': {
		router.map({
		    '/index':{
		        name:'index',
		        component:index
		    },
		    '/list': {
		        name:'list',
		        component: list
		    },
		    '/login': {
		    	name: 'login',
		    	component: login
		    },
		    '/logout': {
		    	name: 'logout',
		    	component: logout
		    },
		    '/hello': {
		    	name: 'hello',
		    	component: hello
		    },
		    '/main': {
		    	name: 'main',
		    	component: main
		    }
		});
	// }
	// 设置默认路由
	router.redirect({
	    '*':"/hello"
	});
}