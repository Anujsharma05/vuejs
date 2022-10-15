<template>
  <section class="contact-coach">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">Your Message</label>
        <textarea id="message" rows="5" v-model.trim="message"></textarea>
      </div>
      <div class="actions">
        <base-button mode="flat">Send Message</base-button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
      return {
          email: '',
          message: ''
      }
  },
  methods: {
    submitForm() {
      const request = {
          coachId: this.id,
          userEmail: this.email,
          message: this.message
      }

      this.$store.dispatch('requests/addRequest', request);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
.contact-coach {
  margin: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.form-control {
  padding: 0.5rem 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin: 0.5rem 0;
}

input,
textarea {
  width: 100%;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  font-size: 1rem;
  outline: 1px solid rgba(0, 0, 0, 0.3);
}

input:focus,
textarea:focus {
  outline: 1px solid var(--clr-secondary);
}

.actions {
  margin: 1rem;
  text-align: center;
}
</style>