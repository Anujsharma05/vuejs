<template>
  <section>
    <h3 v-if="this.items">Found {{ this.items.length }} results for search term {{ posterType }}.</h3>
    <ul>
      <shopping-item v-for="item in items" :key="item.id" :item="item"></shopping-item>
    </ul>
  </section>
</template>

<script>
import ShoppingItem from './ShoppingItem.vue';
export default {
  components: {
    ShoppingItem
  },
  props: {
    posterType: {
      type: String
    },
    items: {
      type: Array,
      default: function() {
        return [
          {
            id: 404,
            title: 'Not Found',
            url: 'not-found',
            price: 404
          }
        ]
      }
    }
  }
};
</script>

<style scoped>

h3 {
  margin-left: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}
</style>