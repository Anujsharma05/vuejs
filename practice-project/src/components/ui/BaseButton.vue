<template>
  <button :class="'btn-' + mode" v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="to" :class="'link-' + mode" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--clr-text);
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  font-size: 1.3rem;
}

.link-outline {
  border-radius: 10px;
  margin: 0 1rem;
}

.link-outline:hover {
  outline: 2px solid var(--clr-text);
}

.link-flat {
  background: var(--clr-primary);
  border-radius: 30px;
  font-weight: bold;
}

.link-flat:hover {
  background: var(--clr-text);
  color: white;
  font-weight: bold;
  outline: none;
}

.active {
  outline: 2px solid var(--clr-text);
}

.btn-outline {
  border: none;
  outline: 2px solid var(--clr-text);
  border-radius: 30px;
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  font-size: 1.3rem;
  cursor: pointer;
  color: var(--clr-text);
}

.btn-outline:hover {
  color: var(--clr-secondary);
  outline: 2px solid var(--clr-secondary);
}
</style>