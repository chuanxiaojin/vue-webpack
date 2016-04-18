/**
 * 新学习了ES6那就直接试着使用ES6的语法吧...
 */

import Auth_API from '../js/server-api.js';
const option = Auth_API.option;
const user  = Auth_API.user;
export default {
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

                console.log(response);
                // localStorage.setItem('token', response.data.token);
                window.sessionStorage.token = response.data.token;

                console.log('window.sessionStorage.token: ' + window.sessionStorage.token);


                user.authenticated = true;
                var that = context;
                // 判断登录成功后跳转到 list 页面
                setTimeout(function() {
                    that.loginInfo = "",
                    that.$route.router.go({name:"hello"});
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
    	console.log(user.authenticated);
    	if(window.sessionStorage.token) {
    		var _this = this;
    		var that = context;
	    	context.$http(
	            {
	                url: option.api.base_url + '/user/logout',
	                method: 'get'
	            }
	        ).then(function(response) {
	        	console.log(response);
	            if(response.data.logout == true) {
	                context.loginInfo = "退出成功, 两秒钟后跳转";

	                // localStorage.removeItem('token');
	                delete window.sessionStorage.token;
	                user.authenticated = false;
	                // console.log(response.data);
	                console.log('window.sessionStorage.token: ' + window.sessionStorage.token);
	               
	                
	                // 判断退出成功后跳转到 main 页面
	                setTimeout(function() {
	                    that.loginInfo = "",
	                    // that.$route.router.go({name:"main"});
	                    window.location.pathname = '/main';
	                }, 2000)
	            }else {

	                context.loginInfo = response.data.message;
	            }                    
	        }, function(error) {
	            context.loginInfo = error.message;
	            console.log(error);
	        });
	    }else {
	    	context.loginInfo = ""
	    }
    }
}