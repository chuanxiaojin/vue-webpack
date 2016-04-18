<script>
    export default{
        data () {
            return {}
        }

    }
</script>
<template>
    <div>
        <h2><a v-link="{ name: 'login' }">点击登录</a></h2>
        <h2><a v-link="{ name: 'list' }">路由限制,对后端有请求, 没有登录不能访问</a><h2>
        <h2><a v-link="{ name: 'noRes' }">路由限制,对后端没有请求, 可以正常访问</a><h2>	
    </div>
</template>

