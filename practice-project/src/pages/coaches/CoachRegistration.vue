<template>
  <base-card>
    <h2>Registration Form</h2>
    <coach-form></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>