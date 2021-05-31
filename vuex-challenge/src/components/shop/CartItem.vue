<template>
    <li class="cart-item">
        <img :src="item.image" :alt="item.title">
        <h3>{{ item.title }}</h3>
        <div>
            <span>Price per Item: <strong>${{ item.price }}</strong></span>
            <span>Quantity: <strong>{{ item.quantity }}</strong></span>
        </div>
        <h4>Total: ${{ item.total }}</h4>
        <button @click="removeItem">Remove</button>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        removeItem() {
            this.$store.dispatch('cart/removeItem', this.item);
        }
    }
}
</script>

<style scoped>
.cart-item {
  padding: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4);
  grid-auto-columns: 160px 1fr;
  display: grid;
  width: 60%;
  margin: auto;
  grid-gap: 1rem 1.5rem;
  margin-bottom: 1rem;
  grid-template-areas: "img     img"
                       "title   title"
                       "div     div"
                       "total   total"
                       "button  button";
}

.cart-item > * {
    justify-self: center;
    margin: 0;
}

.cart-item img {
    width: 80px;
    height: 80px;
    grid-area: img;
    justify-self: center;
    border-radius: 50%;
    object-fit: cover;
}

.cart-item h3 {
    grid-area: title;
}

.cart-item div {
    display: flex;
    justify-content: space-between;
    grid-area: div;
    justify-self: stretch;
}

.cart-item h4 {
    grid-area: total;
    justify-self: stretch;
    text-align: center;
    border-top: 1px solid black;
    border-bottom: 2px solid black;
    padding: 5px 0;
}

.cart-item button {
    grid-area: button;
}
</style>