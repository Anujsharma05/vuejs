<template>
  <the-header @search-term="searchItem"></the-header>
  <shop-interface :searchTerm="searchTerm"></shop-interface>
</template>

<script>
import TheHeader from "./components/TheHeader";
import ShopInterface from "./components/shop-interface/ShopInterface";

export default {
  name: "App",
  components: {
    TheHeader,
    ShopInterface,
  },
  data: function () {
    return {
      searchTerm: "cat",
    };
  },
  methods: {
    searchItem: function (value) {
      this.searchTerm = value;
    },
  },
};
</script>

<style>
:root {
  --main-color: #007f74;
  --secondary-color: #4bccc1;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

button {
  color: white;
  background-color: var(--main-color);
  border: none;
  cursor: pointer;
}

button:active {
  background-color: var(--secondary-color);
}
</style>