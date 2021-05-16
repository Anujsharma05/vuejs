<template>
  <p>
    <span>Total</span>
    <span>${{ formatPrice(total) }}</span>
  </p>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatPrice: function(price) {
      return price.toFixed(2);
    },
  },
};
</script>

<style scoped>
p {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 3rem;
}
</style>
