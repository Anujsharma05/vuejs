<template>
    <h1>New component</h1>
</template>

<script>
    export default {
        name: 'New',
        created() {
            console.log('New component created');
        },
        beforeDestroy() {
            console.log('New before destroy');
        },
        destroyed() {
            console.log('New component destroyed');
        },
        activated() {
            console.log('new activated');
        },
        deactivated() {
            console.log('new deactivated');
        }
    }
</script>