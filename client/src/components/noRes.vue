<script>
    export default{
        data () {
           return {
                hello:"我没有对后端请求, 所有你在诶登录的情况下访问到了...",
            }
        }
    }
</script>

<template>
    <div>
        <h1>{{hello}}</h1>
        <h2><a v-link="{ name: 'login' }">点击登录</a><h2>
        <h2><a v-link="{ name: 'list'}">路由限制,对后端有请求, 没有登录不能访问</a></h2>
    </div>   
</template>
<style>
    .stylus-test 
        color: red;
    textarea
        border: 1px green solid
        max-width: 600px
        max-height: 280px
        min-width: 200px
        min-height: 50px
    .styl
        color: #ccc
    .code 
        color: #e96900
</style>