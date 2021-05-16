<template>
    <ul>
        <li :class="{active: xyz==='poor'}"><button type="button" @click="activate('poor')">Poor</button></li>
        <li :class="{active: xyz==='average'}"><button type="button" @click="activate('average')">Average</button></li>
        <li :class="{active: xyz==='great'}"><button type="button" @click="activate('great')">Great</button></li>
    </ul>
</template>

<script>
    export default {
        props: ['xyz'],
        emits: ['update:xyz'],
        methods: {
            activate(option) {
                this.$emit('update:xyz', option);
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
    }

    .active {
        border: 1px solid purple;
        color: purple;
    }

    .active button {
        color: inherit;
    }
</style>