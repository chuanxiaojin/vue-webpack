<script>
    export default{
        data () {
            return {
                hello:"点击下面按钮退出(将跳转到 hello 页面)...",
                option: {
                    api: {
                        base_url : "http://127.0.0.1:4000"
                    }
                },
                loginInfo: "这里会告诉你退出成功...",
            }
        },
        methods: {
             logout: function() {
                var _this = this;
                this.$http(
                    {
                        url: this.option.api.base_url + '/user/logout',
                        method: 'get'
                    }
                ).then(function(response) {
                    console.log(response);
                    var loginFlag = response.data;
                    if(loginFlag.success == true) {
                        console.log('退出成功');
                        this.loginInfo = loginFlag.logout;

                        // 判断登录成功后跳转到 list 页面
                        setTimeout(function() {
                            _this.$route.router.go({name:"hello"});
                        }, 2000)
                    }else {
                        console.log('退出失败');
                    } 
                    
                }, function(error) {
                    this.loginInfo = error.message;
                    console.log(error);
                    _this.$route.router.go({name:"hello"});
                });
            }
        }
    }
</script>

<template>
    <div class="login-form">
        <h2>{{hello}}</h2>
        <button class="btn btn-primary" @click="logout()">logout</button>
        <span>没有使用 token , 出现问题, 慢慢做好</span>
        <p class="loginInfo">{{loginInfo}}</p>
    </div>
</template>
