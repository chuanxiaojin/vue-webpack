/**
 * 新学习了ES6那就直接试着使用ES6的语法吧...
 */

import Auth_API from '../js/server-api.js';
const option = Auth_API.option;
export default {
	user: {
		authenticated: false
	},
	login(context, username, password) {
        if(username == '' || password == '') {
            context.loginInfo = "看看啥没填...";
            return;
        }
        var _this = this;
        var that = context;

        context.$http(
            {
                url: option.api.base_url + '/user/signin',
                method: 'post',
                data: {username: username, password: password}
            }
        ).then(function(response) {
            if(response.data.success == true) {
                context.loginInfo = "登录成功, 两秒钟后跳转";

                localStorage.setItem('token', response.data.token);
                console.log(response.data);

                _this.user.authenticated = true;
                var that = context;
                // 判断登录成功后跳转到 list 页面
                setTimeout(function() {
                    that.loginInfo = "",
                    that.$route.router.go({name:"main"});
                }, 2000)
            }else {
                context.loginInfo = response.data.message;
            }                    
        }, function(error) {
            context.loginInfo = error.message;
            console.log(error);
        });
    },
    logout(context) {
    	 console.log(23333333333333);
    	if(this.user.authenticated) {
    		var _this = this;
    		var that = context;

	    	context.$http(
	            {
	                url: option.api.base_url + '/user/logout',
	                method: 'get'
	            }
	        ).then(function(response) {
	            if(response.data.logout == true) {
	                context.loginInfo = "退出成功, 两秒钟后跳转";

	                localStorage.removeItem('token');
	                _this.user.authenticated = false;
	                // console.log(response.data);

	               
	                
	                // 判断登录成功后跳转到 list 页面
	                setTimeout(function() {
	                    that.loginInfo = "",
	                    that.$route.router.go({name:"hello"});
	                }, 2000)
	            }else {
	                // context.loginInfo = response.data.message;
	            }                    
	        }, function(error) {
	            context.loginInfo = error.message;
	            console.log(error);
	        });
	    }else {
	    	this.loginInfo = "还没登录怎么退出！！！"
	    }
    },
    checkAuth() {
		var jwt = localStorage.getItem('token')
		if (jwt) {
			this.user.authenticated = true
		}
		else {
			this.user.authenticated = false
		}
	},
	getAuthHeader() {
		return {
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		}
	}
}