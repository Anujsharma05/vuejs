<template>
    <div>
        <h2>this is sparta</h2>
        <button @click="changeData">sparta</button>
    </div>
</template>

<script>
    import  {eventBus}  from '../main'

    export default {
        name: 'Sparta',
        props: {
            func: Function
        },
        data: function() {
            return {
                myObj: {
                    name: 'Anuj',
                    age: 25,
                    gender: 'Male'
                }
            }
        },
        methods: {
            changeData() {
                this.func(this.myObj);
                eventBus.$emit('age-was-edited', this.myObj.age);
            }
        }
    }
</script>