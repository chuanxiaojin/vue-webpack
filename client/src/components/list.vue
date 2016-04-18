<script>
    export default{
        data () {
            return {
                option: {
                    api: {
                        base_url : "http://127.0.0.1:3000"
                    }
                },
                catalogs: []

            }
        },
        methods: {
            getBootmarks: function() {
                this.$http(
                    {
                        url: this.option.api.base_url + '/api/bookmarks',
                        method: 'get'
                    }
                ).then(function(response) {
                    
                    console.log(response);
                }, function(error) {
                    console.log(error);
                });
            }
        },
        ready: function () {
            this.$http(
                {
                    url: this.option.api.base_url + '/api/catalogs',
                    method: 'get'
                }
            ).then(function(response) {
                this.catalogs = response.data;
                console.log(response);
            }, function(error) {
                console.log(error);
            });
        }
    }
</script>
<template>
    <div>
        <ul>
            <li v-for="catalog in catalogs" style="list-style:none">
                <img v-bind:src="catalog" alt="" style="width:100px;height:100px;">
            </li>
        </ul>
        <h2><a v-link="{ name: 'logout'}">点击退出</a></h2>
    </div>
</template>

