<script>
    import auth from './user.js'
    export default{
        data () {
            return {
                hello:"点击下面按钮退出(将跳转到 hello 页面)...",
                loginInfo: ""
            }
        },
        methods: {
             logout(){
                auth.logout(this);
             } 


        }
    }
</script>

<template>
    <div class="login-form">
        <h2>{{hello}}</h2>
        <button class="btn btn-primary" @click="logout()">logout</button>
        <p class="loginInfo">{{loginInfo}}</p>
    </div>
</template>
