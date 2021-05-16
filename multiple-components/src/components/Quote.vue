<template>
    <h1>Quote component</h1>
</template>

<script>
    export default {
        name: 'Quote',
        created() {
            console.log('quote component created');
        },
        beforeDestroy() {
            console.log('quote before destroy');
        },
        destroyed() {
            console.log('quote component destroyed');
        },
        activated() {
            console.log('quote activated');
        },
        deactivated() {
            console.log('quote deactivated');
        }
    }
</script>
