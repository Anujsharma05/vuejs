<template>
    <ul class="product-list">
        <product-item v-for="product in products" :key="product.id" :product="product"></product-item>
    </ul>
</template>

<script>
import ProductItem from '../components/shop/ProductItem.vue';

export default {
    components: {
        ProductItem
    },
    computed: {
        products() {
            return this.$store.getters['products/allProducts'];
        }
    }
}
</script>

<style scoped>
.product-list {
    list-style: none;
    padding: 0;
    display: grid;
    justify-items: center;
    grid-row-gap: 1.5rem;
}
</style>