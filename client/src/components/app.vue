<script>
    export default {
        data () {
            return {
                name:"jinzk",
                theme:"vue-webpack"
            }
        }
    }
</script>

<template>
<div>
    <h1>Author：{{name}}</h1>
    <h2>Theme: {{theme}}</h2>
    <br><br>
    <div class="nav">
        <h3>导航栏部分</h3>
        <ul class="nav-ul">
            <li><h4><a v-link="{ name: 'login' }">点击登录</a></h4></li>
            <li><h4><a v-link="{ name: 'hello' }">路由限制,没有登录不能访问(TODO..token??)</a></h4></li>
        </ul>
    </div>
    <router-view class="view" transition="fade" transition-mode="out-in" keep-alive></router-view>
</div>
</template>
