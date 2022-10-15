<template>
  <div>
    <the-header></the-header>
    <section class="main-content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  created() {
    this.autoLogin();
  },
  methods: {
    autoLogin() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if(token && userId) {
        this.$store.dispatch("autoLogin", {
        token: token,
        userId: userId,
      });
      }
    },
  },
};
</script>

<style>
:root {
  --main-clr: #3d008d;
  --secondary-clr: hsl(266, 100%, 78%);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.main-content {
  margin: 2rem;
}

.form-control {
  margin: 1rem 0;
}
.form-control label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>