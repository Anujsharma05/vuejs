<template>
    <div>
        <h2>Quotes Added</h2>
        <div class=outline>
            <div :style="{width: quoteCount*10 + '%'}"></div>
            <span>{{ quoteCount }} / {{ maxCount }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['quoteCount', 'maxCount']
    }
</script>

<style scoped>
    .outline {
        height: 25px;
        background: gray;
        position: relative;
    }

    .outline div {
        display: inline-block;
        background: blue;
        height: 100%;
        vertical-align: middle;
    }

    .outline span {
        vertical-align: middle;
        position: absolute;
        left: 48%;
        top: 3px;
        color: white;
    }
</style>