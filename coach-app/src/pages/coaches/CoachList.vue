<template>
  <base-card>
    <coach-filter @setFilter="setFilter"></coach-filter>
  </base-card>
  <base-card>
    <section>
      <button-link btnStyle="main" @click="refreshCoaches">Refresh</button-link>
      <button-link link :to="registerCoachLink" v-if="!isCoach"
        >register as a coach</button-link
      >
    </section>

    <div class="loading" v-if="isLoading">LOADING...</div>

    <section v-else>
      <ul>
        <coach-item
          v-for="coach in coaches"
          :key="coach.firstName"
          :coach="coach"
        ></coach-item>
      </ul>
    </section>
  </base-card>
</template>

<script>
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";

export default {
  data() {
    return {
      isLoading: false,
      filterItems: [],
    };
  },
  components: {
    CoachFilter,
    CoachItem,
  },
  methods: {
    async refreshCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/fetchCoaches");
      } catch (error) {
        console.log(error.message);
      }

      this.isLoading = false;
    },
    setFilter(data) {
      this.filterItems = data;
    },
  },
  mounted() {
    this.refreshCoaches();
  },
  computed: {
    coaches() {
      const coaches = this.$store.getters["coaches/coaches"];

      return coaches.filter((coach) => {
        for (let item of this.filterItems) {
          if (coach.areas.includes(item)) {
            return true;
          }
        }
        return false;
      });
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    registerCoachLink() {
      const isAuthenticated = this.$store.getters.isAuthenticated;

      if (isAuthenticated) {
        return {
          name: "register",
        };
      } else {
        return {
          name: "auth",
          query: {
            redirect: "register",
          },
        };
      }
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