<template>
    <h2>Child one</h2>
</template>

<script>
export default {
    name: 'ChildOne',
    beforeUnmount() {
        console.log('before mount called');
    },
    unmounted() {
        console.log('unmounted called');
    },
    activated() {
        console.log('component activated');
    },
    deactivated() {
        console.log('component deactivated');
    }
}
</script>