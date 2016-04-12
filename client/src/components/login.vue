<script>
    export default{
        data () {
            return {
                hello:"输入用户名和密码的登录...",
                user: {
                    username: '',
                    password: ''
                },
                option: {
                    api: {
                        base_url : "http://127.0.0.1:4000"
                    }
                },
                loginInfo: "",
                usernameFlag: false
            }
        },
        methods: {
            chooseName: function (username) {
                if(username.length > 10) {
                    this.usernameFlag = true;
                }else {
                    this.usernameFlag = false;
                }
            },
            login: function(username, password) {
                if(username == '' || password == '') {
                    this.loginInfo = "看看啥没填...";
                    return;
                }
                console.log('hello', this.$http);
                var _this = this;
                this.$http(
                    {
                        url: this.option.api.base_url + '/user/signin',
                        method: 'post',
                        data: {username: username, password: password}
                    }
                ).then(function(response) {

                    var loginFlag = response.data;
                    if(loginFlag.success == true) {
                        console.log('登录成功');
                        this.loginInfo = "登录成功, 两秒钟后跳转";
                        var that = this;
                        // 判断登录成功后跳转到 list 页面
                        setTimeout(function() {
                            that.loginInfo = "",
                            _this.$route.router.go({name:"main"});
                        }, 2000)
                    }else {
                        console.log('登录失败');
                        this.loginInfo = loginFlag.message;
                    }                    
                }, function(error) {
                    this.loginInfo = error.message;
                    console.log(error);
                });
            }
        }
    }
</script>

<template>
    <div class="login-form" id="login">
        <h2>{{hello}}</h2>

        <div class="control-group vue-input-box">
            <label class="control-label" for="username">username: 
                <input class="vue-input" v-vue-change="chooseName(user.username)" type="text" id="username" v-model="user.username" placeholder="username"><span class="loginInfo" v-show="usernameFlag">名字太长了</span>
            </label>
                
        </div>

        <div class="control-group vue-input-box">
            <label class="control-label" for="password">password: 
                <input class="vue-input" setDirective="function()" type="password" id="password" v-model="user.password" placeholder="password">
            </label>
        </div>

        <button class="btn btn-primary" @click="login(user.username, user.password)">login</button>
        <p class="loginInfo">{{loginInfo}}</p>
    </div>

</template>
