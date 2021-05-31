<template>
  <li class="product-item">
    <img :src="product.image" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <span>${{ product.price }} </span>
    <p>{{ product.description }}</p>
    <button @click="addToCart">Add to Cart</button>
  </li>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    addToCart() {
      this.$store.dispatch({
        type: 'cart/addItem',
        product: this.product
      });
    }
  }
};
</script>

<style scoped>
.product-item {
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  grid-auto-columns: 160px 1fr;
  display: grid;
  width: 45%;
  min-width: 430px;
  grid-gap: 1rem 1.5rem;
  grid-template-areas: "img     title"
                       "img     price"
                       "img     description"
                       "img     ....."
                       "button  button";
}

.product-item img {
  /* display: inline-block; */
  height: 160px;
  width: 160px;
  grid-area: img;
}

.product-item h3 {
    grid-area: title;
    margin: 0;
}

.product-item span {
    grid-area: price;
    justify-self: left;
    background-color: #ffa007;
    font-weight: bold;
    padding: 0.2rem 1.2rem;
    border-radius: 2rem;
}

.product-item p {
    grid-area: description;
    margin: 0;
}

.product-item button {
    grid-area: button;
    justify-self: center;
    background-color: var(--main-color);
    color: white;
    font-size: 1.1rem;
    padding: 0.7rem 2.4rem;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
}

.product-item button:hover {
    background-color: var(--main-color);
    outline: 2px solid var(--main-color);
    outline-offset: 2px;
}
.product-item button:active {
    background-color: #ad0090;
    outline: 2px solid #ad0090;;
    outline-offset: 2px;
}
</style>