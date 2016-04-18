/**
 * 定义路由文件
 */
// 引入组件
import index from './components/app.vue';
import list from './components/list.vue';
import hello from './components/hello.vue';
import login from './components/login.vue';
import logout from './components/logout.vue';
import main from './components/main.vue';
import noRes from './components/noRes.vue'


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
		    },
		    '/noRes': {
		    	name: 'noRes',
		    	component: noRes
		    }
		});
	// }
	// 设置默认路由
	router.redirect({
	    '*':"/main"
	});

	/**
	 * [description]  路由限制
	 * @param  {[type]} (transition) [description]
	 * @return {[type]}              [description]
	 */
	// router.beforeEach((transition) => {
	// 	//transition.to.path === '/forbidden'
	// 	console.log(transition);
	// if (!window.sessionStorage.token) {
	//   router.app.authenticating = true
	//   // alert('请先登录');
	//   // window.location.pathname = '/login';
	//   // setTimeout(() => {
	//   //   router.app.authenticating = false
	//   //   alert('this route is forbidden by a global before hook')
	//   //   transition.abort()
	//   // }, 3000)
	// } else {
	//   transition.next()
	// }
	// })
}