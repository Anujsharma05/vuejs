<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ coach.rate }}/hour</h3>
      <p>{{ coach.desc }}</p>
      <section class="badge-section">
        <base-badge v-for="area in areas" :key="area" :area="area"></base-badge>
      </section>
    </base-card>
    <base-card>
      <h1>Interested? Reach out now!</h1>
      <base-button link :to="contactLink" mode="flat">Contact</base-button>
      <router-view></router-view>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      coach: {},
    };
  },
  computed: {
    contactLink() {
      return '/coaches/' + this.id + "/contact";
    },
    fullName() {
      return this.coach.firstname + " " + this.coach.lastname;
    },
    areas() {
      return this.coach.areas;
    },
  },
  created() {
    const coaches = this.$store.getters["coaches/coaches"];
    this.coach = coaches.find((coach) => coach.id === this.id);
  },
};
</script>

<style scoped>
.badge-section {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

</style>