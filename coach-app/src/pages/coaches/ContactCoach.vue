<template>
  <section>
    <Teleport to="body">
      <div class="teleport-test">test div for teleport</div>
    </Teleport>
    <form @submit.prevent="sendMessage">
      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email" required v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">Your Message</label>
        <textarea
          id="message"
          rows="3"
          required
          v-model.trim="message"
        ></textarea>
      </div>
      <div class="form-action">
        <button-link btnStyle="main">Send Message</button-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      email: "",
      message: "",
    };
  },
  
  methods: {
    async sendMessage() {
      if (this.email === "" || this.message === "") {
        alert("please fill the required fields");
        return;
      }

      try {
        await this.$store.dispatch('requests/sendMessage', {
          coachId: this.id,
          email: this.email,
          message: this.message,
        });
      } catch (error) {
        console.log(error.message);
      }

      this.$router.replace({ name: 'coaches' });
    },
  },
};
</script>

<style scoped>
.form-control {
  padding: 0.5rem 0;
}

.form-action {
  text-align: center;
}

.form-action > * {
  border-radius: 10px;
}
</style>