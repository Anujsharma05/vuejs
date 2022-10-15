<template>
  <div class="container">
    <the-header @posterType="posterType = $event"></the-header>
    <shopping-interface :posterType="posterType"></shopping-interface>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ShoppingInterface from "./components/ShoppingInterface.vue";

export default {
  components: {
    TheHeader,
    ShoppingInterface,
  },
  data() {
    return {
      posterType: 'cat'
    }
  }
};
</script>

<style>
:root {
  --main-color: #007f74;
  --secondary-color: #e3fffa;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>
