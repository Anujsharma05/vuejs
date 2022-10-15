<template>
  <header>
    <h2>
      <button-link link to="/">Find a Coach</button-link>
    </h2>
    <nav>
      <menu>
        <li>
          <button-link link to="/coaches">Coaches</button-link>
        </li>
        <li><button-link link v-if="isAuthenticated" to="/requests">Requests</button-link></li>
        <li><button-link link v-if="!isAuthenticated" to="/auth">Login</button-link></li>
        <li><button-link link v-if="isAuthenticated" to="/auth" @click="logout">Logout</button-link></li>
      </menu>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace({ name: 'coaches' });
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.token !== '';
    }
  }
}
</script>

<style scoped>
header {
  background-color: var(--main-clr);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

header h2 {
  margin-left: 5rem;
}

nav {
  width: 20%;
  margin-right: 5rem;
}

menu {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
}
</style>