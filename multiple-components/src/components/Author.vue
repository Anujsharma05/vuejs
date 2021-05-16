<template>
    <h1>Author component</h1>
</template>

<script>
    export default {
        name: 'Author',
        created() {
            console.log('author component created');
        },
        beforeDestroy() {
            console.log('author before destroy');
        },
        destroyed() {
            console.log('author component destroyed');
        },
        activated() {
            console.log('author activated');
        },
        deactivated() {
            console.log('author deactivated');
        }
    }
</script>