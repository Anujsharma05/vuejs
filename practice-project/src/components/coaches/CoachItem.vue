<template>
  <li>
      <h2>{{ fullName }}</h2>
      <strong>${{ rate }}/hour</strong>
      <section class="badge-section">
          <base-badge v-for="area in areas" :key="area" :area="area"></base-badge>
      </section>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
export default {
  components: { BaseBadge },
  props: ["firstname", "lastname", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstname + " " + this.lastname;
    },
  },
};
</script>

<style scoped>
li {
    padding: 1rem;
    margin: 1rem 0;
    border: 3px solid var(--clr-primary);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h2 {
    margin: 0;
}

.badge-section {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
</style>