<script>
    export default{
        data () {
            return {}
        }

    }
</script>
<template>
    <div>
        <h2><a v-link="{ name: 'list' }">点击查看 list 页面(需要token, 路由做限制 TODO..)</a></h2>
        <h2><a v-link="{ name: 'logout'}">点击退出</a></h2>
    </div>
</template>

