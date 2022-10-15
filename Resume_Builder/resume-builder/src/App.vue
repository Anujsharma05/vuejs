<template>
  <header>
    <the-header></the-header>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
:root {
  --primary-color: hsl(217, 95%, 60%);
  --active-color: hsl(217, 68%, 22%);
  --header-color: hsl(120, 70%, 47%);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

label {
  font-size: 12px;
  font-weight: bold;
}

input,
select {
  padding: 0.5rem;
  box-shadow: none;
}
</style>