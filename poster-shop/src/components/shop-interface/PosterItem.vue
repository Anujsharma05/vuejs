<template>
  <li class="poster-grid__item">
    <div class="img-container">
      <img src="https://unsplash.it/250/250" />
    </div>
    <div class="item-data">
      <span>{{ item.title }}</span>
      <span class="price">${{ item.price }}</span>
      <button type="button" @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  emits: {
    "add-item": {
      type: Object,
    },
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    addToCart: function () {
      this.$emit("add-item", this.item);
    },
  },
};
</script>

<style scoped>
.poster-grid__item {
  display: flex;
  padding: 2.5rem;
  background: white;
  border-radius: 5px;
  border: 1px solid black;
}

.poster-grid__item > * {
  width: 50%;
}

.img-container {
  max-width: 250px;
  height: 160px;
}

.img-container img {
  width: 100%;
  height: 100%;
}

.item-data {
  padding: 1rem 0 0 2rem;
  display: flex;
  flex-direction: column;
}

.item-data > span:first-of-type {
  font-size: 1.2rem;
}

.item-data .price {
  color: var(--main-color);
  margin: 1.5rem 0;
  font-weight: bold;
  font-size: 1.4rem;
}

.item-data > button {
  padding: 0.6rem 0.8rem;
  margin: 0;
  width: 100px;
}

@media (max-width: 550px) {
  .poster-grid__item {
    flex-direction: column;
    align-items: center;
  }
}
</style>