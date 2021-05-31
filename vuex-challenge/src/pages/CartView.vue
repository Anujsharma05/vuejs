<template>
  <section>
    <header>
      <h1>Your Cart</h1>
      <h3>Total Amount: <span>${{ totalPrice.toFixed(2) }}</span></h3>
    </header>
    <ul>
      <cart-item
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :item="cartItem"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "../components/shop/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters("cart", ["cartItems", "totalPrice"]),
  },
};
</script>

<style scoped>

section {
  width: 50%;
  margin: auto;
}

header h1 {
    border-bottom: 2px solid #a3a1a1;
    padding: 1rem;
    text-align: center;
}

header h3 {
    text-align: center;
}

header h3 > span {
    background-color: var(--main-color);
    color: white;
    padding: 0.2rem 1.2rem;
    border-radius: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

</style>