<template>
    <li>
        <div>
            <img src="http://unsplash.it/150/150">
        </div>
        <div class="item-detail">
            <h3>{{ item.title }}</h3>
            <p><span>$</span>{{ item.price }}</p>
            <button @click="selectItem(this.item)">Add to Cart</button>
        </div>
    </li>
</template>

<script>
    export default {
        inject: ['selectItem'],
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped>

li {
    border: 1px solid black;
    margin: 1rem;
}

li > div {
    display: inline-block;
    /* width: 50%; */
    vertical-align: middle;
}

img {
    margin: 1rem;
}

.item-detail {
    vertical-align: top;
}

.item-detail p {
    font-size: 1.5rem;
    color: var(--main-color);
    font-weight: bold;
}

.item-detail span {
    font-size: 1.5rem;
}

.item-detail button {
    padding: 0.5rem;
    background-color: var(--main-color);
    color: white;
    font-weight: bold;
    cursor: pointer;
}
</style>