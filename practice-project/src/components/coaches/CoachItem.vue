<template>
  <li>
      <h2>{{ fullName }}</h2>
      <strong>${{ rate }}/hour</strong>
      <section class="badge-section">
          <base-badge v-for="area in areas" :key="area" :area="area"></base-badge>
      </section>
      <section class="actions">
        <base-button link :to="contactLink" mode="flat">Contact</base-button>
        <base-button link :to="detailsLink" mode="flat">View Details</base-button>
      </section>
  </li>
</template>

<script>
export default {
  props: ["id", "firstname", "lastname", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstname + " " + this.lastname;
    },
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    detailsLink() {
      return this.$route.path + '/' + this.id;
    }
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

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>