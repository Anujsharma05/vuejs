<template>
  <base-container title="Vuex" v-if="loggedIn">
  <range-bound></range-bound>
  <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>"
  
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import RangeBound from './components/RangeBound.vue';
import UserAuth from './components/UserAuth.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    RangeBound,
    UserAuth
  },
  methods: {
    // addOne() {
    //   this.$store.commit('increment');
    // }

    // ...mapActions(['increment'])

    ...mapActions('numbers', {
      addOne: 'increment'
    })
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>