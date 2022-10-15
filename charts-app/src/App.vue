<template>
  <section v-if="dataReady">
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("chartData");
    },
    computed: {
    dataReady() {
        return this.$store.getters.dataReady;
    }
  }
  }
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 2rem;
}

.container h2 {
  text-align: center;
}
</style>