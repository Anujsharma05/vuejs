<template>
    <div class="slot-component">
        <slot name="h1-slot"></slot>
        <slot name="h2-slot"><h4 v-text="name"></h4></slot>
        <slot></slot>
        <h1>content present in slot component</h1>
    </div>
</template>

<script>
    export default {
        name: 'SlotComponent',
        data: function() {
            return {
                name: 'Anuj Sharma'
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: green;
    }
    h4 {
        color: purple;
    }
</style>