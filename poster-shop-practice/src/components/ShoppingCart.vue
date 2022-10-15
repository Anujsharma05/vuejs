<template>
  <section>
    <h1>Shopping Cart</h1>
    <hr />
    <p v-if="!itemsPresent">No Items in the Cart</p>
    <section v-if="itemsPresent">
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          <h3>{{ item.title }}</h3>
          <div>
            <span>${{ item.price }} x {{ item.quantity }}</span>
            <span class="qty-btns">
              <button @click="increaseQty(item.id)">+</button>
              <button @click="decreaseQty(item.id)">-</button>
            </span>
          </div>
        </li>
      </ul>
      <hr />
      <div>
        <span>Total Cost: ${{ totalCost }}</span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  emits: {
    incQty: {
      type: Number,
    },
    decQty: {
      type: Number,
    },
  },
  props: {
    cartItems: {
      type: Array,
    },
  },
  methods: {
    increaseQty(id) {
      this.$emit("incQty", id);
    },
    decreaseQty(id) {
      this.$emit("decQty", id);
    },
  },
  computed: {
    itemsPresent() {
      return this.cartItems.length > 0;
    },
    totalCost() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total = total + item.price * item.quantity;
      });

      return total.toFixed(2);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.qty-btns {
  margin: 0.5rem;
}

.qty-btns button {
  margin: 0.2rem;
  padding: 0.2rem 0.5rem;
  font-weight: bold;
  background-color: var(--main-color);
  /* border: 0; */
  /* outline: none; */
  cursor: pointer;
}

.qty-btns button:nth-child(2) {
  padding: 0.2rem 0.6rem;
}

section > div {
  text-align: right;
}
</style>