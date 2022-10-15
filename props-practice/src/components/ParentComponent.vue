<template>
    <p>parent component</p>
    <p>{{ name }}</p>
    <button @click="dummyMethod">call back</button>
    <child-component @myEvent="emitMethod"></child-component>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
    name: 'ParentComponent',
    props: {
        name: {
            type: String,
            default: 'Chitku',
            required: true
        },
        callBackFn: {
            type: Function
        }
    },
    components: {
        ChildComponent
    },
    data() {
        return {
            myObj: {
                name: 'obj name',
                num: 5
            }
        }
    },
    methods: {
        emitMethod(event) {
            console.log(event);
        },
        dummyMethod() {
            this.callBackFn(this.myObj);
        }
    }
}
</script>
