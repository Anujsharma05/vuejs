<template>
  <base-card>
    <h2>Register as a coach now!</h2>
    <form @submit.prevent="registerCoach">
      <div class="form-control">
        <label for="firstname">Firstname</label>
        <input type="text" id="firstname" required v-model.trim="firstName" />
      </div>
      <div class="form-control">
        <label for="lastname">Lastname</label>
        <input type="text" id="lastname" required v-model.trim="lastName" />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea id="desc" rows="3" required v-model.trim="description"></textarea>
      </div>
      <div class="form-control">
        <label for="hourlyRate">Hourly Rate(in $/hour)</label>
        <input
          type="number"
          id="hourlyRate"
          placeholder="number only"
          required
          v-model.number="hourlyRate"
        />
      </div>
      <div class="form-control">
        <label>Areas of Expertise</label>

        <div class="areas">
          <input
            type="checkbox"
            id="frontend"
            value="frontend"
            v-model="areas"
          />
          <label for="frontend">Frontend Development</label>
        </div>
        <div class="areas">
          <input
            type="checkbox"
            id="backend"
            value="backend"
            v-model="areas"
          />
          <label for="backend">Backend Development</label>
        </div>
        <div class="areas">
          <input
            type="checkbox"
            id="career"
            value="career"
            v-model="areas"
          />
          <label for="career">Career Advisory</label>
        </div>
      </div>
      <div>
          <button-link btnStyle="main">Register</button-link>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      hourlyRate: null,
      areas: [],
    };
  },
  methods: {
      async registerCoach() {
          if(this.areas.length === 0) {
              alert('fill the areas of expertise');
              return;
          }

          try {
            await this.$store.dispatch('coaches/registerCoach',{
              firstName: this.firstName,
              lastName: this.lastName,
              description: this.description,
              hourlyRate: this.hourlyRate,
              areas: this.areas
          });
          } catch(error) {
            console.log(error.message);
          }

          this.$router.replace({name:'coaches'});
      }
  },

};
</script>

<style scoped>
.areas label {
  display: inline-block;
  font-weight: normal;
  margin-bottom: 0.5rem;
}
</style>