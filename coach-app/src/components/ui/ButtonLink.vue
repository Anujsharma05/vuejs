<template>
  <router-link :to="to" v-if="link">
    <slot></slot>
  </router-link>
  <button v-else :class="[ isMainBtn ? 'main-btn' : 'flat-btn']" >
    <slot></slot>
  </button>
  
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false,
    },
    btnStyle: {
      type: String,
      required: false
    },
    to: {
      type: [String, Object],
      required: false,
    },
  },
  computed: {
    isMainBtn() {
      return this.btnStyle === 'main';
    }
  }
};
</script>

<style scoped>
button {
  padding: 1rem 1.5rem;
  font-weight: bold;
  color: var(--secondary-clr);
  border-radius: 5px;
}

button:hover {
  cursor: pointer;
}

.main-btn {
  background-color: var(--main-clr);
}

.main-btn:hover {
  color: var(--main-clr);
  background-color: var(--secondary-clr);
}

.flat-btn {
  background: none;
  border: 0;
  margin: 0 1rem;
}

.flat-btn:hover {
  color: var(--main-clr);
}

a {
  text-decoration: none;
  color: var(--secondary-clr);
  padding: 1rem;
}

a:hover {
    color: white;
}

.active-link {
    color: white;
    border: 1px solid white;
}

</style>