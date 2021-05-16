<template>
    <div>
        <h1>hello from home vue</h1>
    <h2>{{ xyz.name }} / {{ xyz.age }}</h2>
    <h3>{{myArray[1]}}</h3>
    <button @click="change">Change</button>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            xyz: {
                type: Object,
                default: function() {
                    return {
                        x: 'xyz',
                        y: 'abc'
                    }
                }
            },
            myArray: {
                type: Array,
                default: function() {
                    return ['alpha', 'beta'];
                },
            }
        },
        methods: {
            change: function() {
                this.myArray[0] = 'updated';
                this.xyz.x = 'Hola';
            }
        }
    }
</script>