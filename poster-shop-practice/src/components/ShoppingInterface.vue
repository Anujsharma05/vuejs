<template>
  <section class="main-content">
    <shopping-list class="shopping-list" :posterType="posterType" :items="filteredItems"></shopping-list>
    <shopping-cart
      class="shopping-cart"
      :cartItems="cartItems"
      @incQty="incQty"
      @decQty="decQty"
    ></shopping-cart>
  </section>
</template>

<script>
import ShoppingList from "./ShoppingList.vue";
import ShoppingCart from "./ShoppingCart.vue";

export default {
  components: {
    ShoppingList,
    ShoppingCart,
  },
  props: {
    posterType: {
      type: String,
    },
  },
  data() {
    return {
      items: null,
      cartItems: [],
    };
  },
  provide() {
    return {
      selectItem: this.addToCartItems,
    };
  },
  methods: {
    addToCartItems(selectedItem) {
      const index = this.cartItems.findIndex(
        (item) => item.id === selectedItem.id
      );

      if (index === -1) {
        const newItem = {
          ...selectedItem,
          quantity: 1,
        };

        this.cartItems.push(newItem);
      } else {
        const existingItem = this.cartItems[index];
        existingItem.quantity++;
      }
    },
    incQty(id) {
      this.cartItems.forEach((item) => {
        if (id === item.id) {
          item.quantity++;
          return;
        }
      });
    },
    decQty(id) {
      const index = this.cartItems.findIndex((item) => item.id === id);

      if (index === -1) {
        return;
      }

      const qty = this.cartItems[index].quantity;

      if (qty > 1) {
        this.cartItems[index].quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    },
  },
  computed: {
    filteredItems() {
      if (this.items) {
        return this.items[this.posterType];
      }
      return null;
    },
  },
  async created() {
    await this.$store.dispatch('shopItems');
    this.items = this.$store.getters.items;
  },
};
</script>

<style scoped>
/* .main-content {
  position: relative;
} */
section > * {
  display: inline-block;
  vertical-align: top;
}
.shopping-list {
  width: 60%;
}

.shopping-cart {
  /* position: sticky;
  top: 0; */
  width: 40%;
  padding: 1rem;
}
</style>