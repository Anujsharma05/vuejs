<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ coach ? coach.hourlyRate : 0 }}/hour</h3>
    </base-card>
    <base-card>
      <h2>Interested? Reach out now!</h2>
      
      <!-- contact-coach -->
      <router-view v-if="formOpened"></router-view>

      <router-link
        link
        :to="contactCoachUrl"
        @click="formOpened = true"
        v-else
        >Contact</router-link
      >
    </base-card>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      formOpened: false,
    };
  },
  created() {
      console.log(this.$route);
    this.formOpened = this.$route.query.formView;
  },
  mounted() {
    this.$store.dispatch('coaches/fetchCoaches');
  },
  computed: {
    coach() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.find((c) => c.id === this.id);
    },
    fullName() {
      if (this.coach) {
        return this.coach.firstName + " " + this.coach.lastName;
      }
      return "";
    },
    contactCoachUrl() {
      return {
        name: "contact",
        params: {
          id: this.id,
        },
      };
    },
  },
};
</script>