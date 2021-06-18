<template>
<base-dialog v-if="!!error" :error="error"></base-dialog>
  <section class="filters">
    <base-card></base-card>
  </section>
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

export default {
  data() {
    return {
      error: null,
    };
  },
  components: {
    CoachItem,
  },
  methods: {
    async loadCoaches(forceFetch = false) {
      try {
        await this.$store.dispatch("coaches/fetchCoaches", forceFetch);
      } catch (error) {
        this.error = error.message;
      }
    },
  },
  computed: {
    coaches() {
      return this.$store.getters["coaches/coaches"];
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>