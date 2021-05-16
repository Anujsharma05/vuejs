<template>
    <div>
        <button @click="changeValue">Click</button>

        <input type="radio" value="one" :checked="'one' == picked" @change="picked = $event.target.value"> one
        <input type="radio" value="two" :checked="'two' == picked" @change="picked = $event.target.value"> two
        <br>{{ picked }}
        <input type="checkbox" :checked="alter" @change="alter = $event.target.checked">
        {{alter}}
    </div>
</template>

<script>
    export default {
        name: 'CustomComp',
        props: ['value'],
        data: function(){
            return {
                name: 'ANuj Sharma',
                alter: false,
                picked: ''
            }
        },
        methods: {
            changeValue: function() {
                console.log('inside change value');
                this.$emit('input', this.name);
            },
            myMethod: function(event) {
                this.alter = event.target.checked;
            }
        }
    }
</script>