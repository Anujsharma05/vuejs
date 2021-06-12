<template>
  <button :class="'btn-'+mode" v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="to" :class="'link-'+mode" v-else>
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
  padding: 1rem 2rem;
  margin: 0 1rem;
}

.link-outline {
  border-radius: 10px;
  margin: 0 1rem;
}

.link-outline:hover {
  outline: 2px solid var(--clr-text);
}

.active {
  outline: 2px solid var(--clr-text);
}
</style>