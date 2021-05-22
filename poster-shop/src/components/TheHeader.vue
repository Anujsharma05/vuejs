<template>
  <header>
    <div>
      <img src="../assets/logo.png" />
      <h1>Vue.js Poster Shop</h1>
    </div>
    <section>
      <input type="text" ref="searchTerm" /><button
        type="button"
        @click="sendSearchTerm"
      >
        Search
      </button>
    </section>

    <p>Try search terms cat, dog, flower</p>
  </header>
</template>

<script>
export default {
  emits: {
    "search-term": {
      type: String,
    },
  },
  methods: {
    sendSearchTerm: function () {
      let term = this.$refs.searchTerm.value;
      this.$emit("search-term", term);
    },
  },
  mounted() {
    this.$refs.searchTerm.value = "cat";
  },
};
</script>

<style scoped>
header {
  text-align: center;
  background-color: var(--main-color);
  padding: 2rem;
}
img {
  width: 38px;
  height: 38px;
  vertical-align: middle;
}

h1 {
  display: inline-block;
  vertical-align: middle;
  color: white;
  text-shadow: 0px 0px 3px #c2fcf3;
}

header section {
  height: 50px;
}

header input {
  height: 100%;
  border: none;
  width: 36%;
  font-size: 1rem;
  padding-left: 1rem;
}

header input:focus {
  outline: none;
}

header button {
  background-color: #dca11d;
  height: 100%;
  font-size: 1rem;
  width: 115px;
}

header button:active {
  background-color: #573d05;
}

header p {
  text-align: center;
  font-size: 0.9rem;
  color: white;
}
</style>