<template>
    <h2>Welcome to the app</h2>
    {{ text }}
    <button @click="helloFn">Hello</button>
    <router-view></router-view>
</template>

<script>
    export default {
        
        methods: {
            helloFn() {
                this.$store.dispatch('helloWorld');

                this.$router.push({
                    name: 'error',
                    params: {
                        paramOne: 'abc',
                        paramTwo: 'xyz'
                    },
                    query: {
                        sort: 'asc',
                        pageNo: 2
                    }
                });
            }
        },
        computed: {
            text() {
                return this.$store.getters.text;
            }
        }
    }
</script>