<script>
    export default{
        data () {
           return {
                hello:"hello, vue-webpack",
            }
        }
    }
</script>

<template>
    <div>
        <h1>{{hello}}</h1>
        <p class="stylus-test">stylus-test</p>
        <textarea></textarea>
        <p class="styl">我要弄好 <span class="code">stylus</span></p>
        <p class="ps">上一行的 stylus 橘黄色就好了</p>
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