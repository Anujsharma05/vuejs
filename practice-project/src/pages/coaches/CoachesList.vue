<template>
  <base-dialog v-if="!!error" :error="error"></base-dialog>
  <coach-filter @filtered-coach="filterByAreas"></coach-filter>
  <section>
    <base-card>
      <div class="actions">
        <base-button mode="outline" @click="loadCoaches(true)"
          >Refresh</base-button
        >
        <base-button mode="flat" link to="/register"
          >Register as Coach</base-button
        >
      </div>
      <ul>
        <coach-item
          v-for="coach in coaches"
          :key="coach.id"
          :id="coach.id"
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
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  data() {
    return {
      selectedAreas: {
        frontend: true,
        backend: true,
        career: true,
      },
      error: null,
    };
  },
  components: {
    CoachItem,
    CoachFilter,
  },
  methods: {
    async loadCoaches(forceFetch = false) {
      try {
        await this.$store.dispatch("coaches/fetchCoaches", forceFetch);
      } catch (error) {
        this.error = error.message;
      }
    },
    filterByAreas(areas) {
      this.selectedAreas = areas;
    },
  },
  computed: {
    coaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        const areas = coach.areas;

        if (this.selectedAreas.frontend && areas.includes("frontend")) {
          return true;
        }
        if (this.selectedAreas.backend && areas.includes("backend")) {
          return true;
        }
        if (this.selectedAreas.career && areas.includes("career")) {
          return true;
        }
      });
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: space-evenly;
}

ul {
  list-style: none;
  padding: 0;
}
</style>