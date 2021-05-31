<template>
  <div class="container">
    <the-header></the-header>

  <main>
    <router-view></router-view>
  </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
:root {
  --main-color: #551A8B;
  --focus-color: #b2a8b8;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'DejaVu Sans', sans-serif;
}

.container {
  display: grid;
}
</style>