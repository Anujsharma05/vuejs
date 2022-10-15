<template>
<p>Child component</p>
<p>{{ personInfo.name }} || {{ personInfo.gender }}</p>
<button @click="sendDataToParent">Click</button>
<button @click="dummyMethod">send data to app component</button>

<!-- this works because the props is applied to root element by default -->
<grand-child style="background-color: red"></grand-child>
</template>

<script>
import GrandChild from './GrandChild.vue';
export default {
    name: 'ChildComponent',
    components: {
        GrandChild
    },
    emits: ['myEvent'],
    inject: ['personInfo', 'getDataBack'],
    data() {
        return {
            childObj: {
                a: 'a',
                b: 'b'
            }
        }
    },
    methods: {
        sendDataToParent() {
            this.$emit('myEvent', 'homie');
        },
        dummyMethod() {
            this.getDataBack(this.childObj);
        }
    }
}
</script>