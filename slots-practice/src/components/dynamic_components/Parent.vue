<template>
    <h2>Parent component</h2>
    
    <button @click="selectedComponent = 'ChildOne'">One</button>
    <button @click="selectedComponent = 'ChildTwo'">Two</button>
    <button @click="selectedComponent = 'ChildThree'">Three</button>

    <keep-alive>
        <component :is="selectedComponent">
        <!-- default content -->
        <h2>default content</h2>
    </component>
    </keep-alive>
</template>

<script>
import ChildOne from './ChildOne.vue';
import ChildTwo from './ChildTwo.vue';
import ChildThree from './ChildThree.vue';

export default {
    name: 'Parent',
    components: {
        ChildOne,
        ChildTwo,
        ChildThree
    },
    data() {
        return {
            selectedComponent: 'ChildOne'
        }
    }
}
</script>