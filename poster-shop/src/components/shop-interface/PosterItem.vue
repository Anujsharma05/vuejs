<template>
    <li class="poster-grid__item">
      <div class="img-container">
        <img src="https://unsplash.it/250/250">
      </div>
      <div class="item-data">
        <span>{{ item.title }}</span>
        <h2>{{item.price}}</h2>
        <button type="button">Add to Cart</button>
      </div>
    </li>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped>
.poster-grid__item {
    display: flex;
    flex-flow: row wrap;
    padding: 1rem;
}

.poster-grid__item > * {
    width: 50%;
}
</style>