<script>
    import auth from './user.js'
    export default{
        data () {
            return {
                hello:"点击下面按钮退出(将跳转到 hello 页面)dd ...",
                loginInfo: "这里会告诉你退出成功de ..."
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
        <span>没有使用 token , 出现问题, 慢慢做好</span>
        <p class="loginInfo">{{loginInfo}}</p>
    </div>
</template>
