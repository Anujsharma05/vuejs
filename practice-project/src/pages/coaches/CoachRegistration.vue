<template>
  <base-card>
    <h2>Registration Form</h2>
    <coach-form @form-data="formData"></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  methods: {
    formData(coach) {
      this.$store.dispatch('coaches/registerCoach', coach);
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>