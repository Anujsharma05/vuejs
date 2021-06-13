<template>
  <section class="filters">
    <base-card></base-card>
  </section>
  <section>
    <base-card>
      <div class="actions">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button mode="flat" link to="/register"
          >Register as Coach</base-button
        >
      </div>

      <ul>
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :firstname="coach.firstname"
          :lastname="coach.lastname"
          :rate="coach.rate"
          :areas="coach.areas"
        >
        </coach-item>
      </ul>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem
  },
  methods: {
    loadCoaches() {
      this.$store.dispatch("coaches/fetchCoaches");
    },
  },
  computed: {
    coaches() {
      return this.$store.getters["coaches/coaches"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>