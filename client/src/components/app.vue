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
    </div>
    <router-view class="view" transition="fade" transition-mode="out-in" keep-alive></router-view>
</div>
</template>
