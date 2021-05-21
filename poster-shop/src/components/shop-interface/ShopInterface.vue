<template>
  <div class="container">
    <poster-list class="poster" :searchTerm="searchTerm"></poster-list>
    <cart-view class="cart"></cart-view>
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
          required: true
      }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 60% 40%;
}

@media (max-width: 750px) {
  .container {
    grid-template-columns: 100%;
  }
}
</style>