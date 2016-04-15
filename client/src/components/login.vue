<script>
    import auth from './user.js'

    export default{
        data () {
            return {
                hello:"输入用户名和密码的登录...",
                user: {
                    username: '',
                    password: ''
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
            login(username, password) {
                auth.login(this, username, password);
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
