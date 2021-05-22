<template>
  <div class="container">
    <poster-list
      class="poster"
      :searchTerm="searchTerm"
      @add-item="addToCart"
    ></poster-list>
    <cart-view
      class="cart"
      :cartList="cartList"
      @increment-quant="incrementQuantity"
      @decrement-quant="decrementQuantity"
    ></cart-view>
  </div>
</template>

<script>
import PosterList from "./PosterList";
import CartView from "./CartView";
export default {
  components: {
    PosterList,
    CartView,
  },
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      cartList: [],
    };
  },
  methods: {
    addToCart: function (item) {
      if (this.cartList.length == 0) {
        let cartItem = this.createItem(item);
        this.cartList.push(cartItem);
      } else {
        const index = this.cartList.findIndex((res) => res.id === item.id);

        if (index == -1) {
          let cartItem = this.createItem(item);
          this.cartList.push(cartItem);
        } else {
          this.cartList[index].quantity += 1;
        }
      }
    },
    createItem: function (item) {
      let cartItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: 1,
      };

      return cartItem;
    },
    incrementQuantity: function(id) {
      const index = this.cartList.findIndex(res => res.id === id);
      this.cartList[index].quantity += 1;
    },
    decrementQuantity: function(id) {
      const index = this.cartList.findIndex(res => res.id === id);
      let quant = this.cartList[index].quantity;

      if(quant > 1) {
        this.cartList[index].quantity -= 1;
      } else {
        this.cartList.splice(index, 1);
      }
    }
  },
};
</script>

<style scoped>
.container {
  display: grid;
  /* TODO set mobile view */
  grid-template-columns: 3fr 2fr;
  background: #e3fffa;
  /* padding: 2rem 4rem; */
  grid-gap: 3rem;
}

@media (max-width: 860px) {
  .container {
    grid-template-columns: 100%;
  }
}
</style>