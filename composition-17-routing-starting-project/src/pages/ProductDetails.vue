<template>
  <section>
    <h2>{{ product.title }}</h2>
    <h3>${{ product.price }}</h3>
    <p>{{ product.description }}</p>
    <router-link to="/products/p2">product 2</router-link>
  </section>
</template>

<script>
import { reactive, inject, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup(props) {
    // const title = ref('');
    // const price = ref(null);
    // const description = ref('');

    const products = inject('products');
    const route = useRoute();
    const pid = route.params.pid;
    console.log(pid);

    // const selectedProduct = products.value.find(
    //   (product) => product.id === props.pid
    // );

    const selectedProduct = computed(function () {
      return products.value.find((product) => product.id === props.pid);
    });

    const product = reactive(selectedProduct);

    return { product };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>