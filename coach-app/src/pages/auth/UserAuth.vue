<template>
  <base-card>
    <h3>Login/Signup Info</h3>
    <p class="invalid-cred" v-if="invalidCredentials">
      Username/Password is invalid
    </p>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="abc@xyz.com"
          v-model.trim="email"
          required
          @click="clickedInput"
        />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="password"
          required
          @click="clickedInput"
        />
      </div>

      <div class="form-action">
        <button-link btnStyle="main">{{ formBtnCaption.submit }}</button-link>
        <button-link type="button" btnStyle="flat" @click="toggleAuthType">{{
          formBtnCaption.toggle
        }}</button-link>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      authType: "login",
      invalidCredentials: false,
    };
  },
  methods: {
    clickedInput() {
      this.invalidCredentials = false;
    },
    async submitForm() {
      if (this.password.length < 6) {
        alert("password smaller than 6 characters");
        return;
      }

      try {
        if (this.authType === "login") {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
        }

        const redirect  = this.$route.query.redirect;
        const isCoach = this.$store.getters['coaches/isCoach'];

        if(redirect === 'register' && !isCoach) {
          this.$router.replace({ name: 'register' });
        } else {
          this.$router.replace({ name: 'coaches' });
        }

      } catch (error) {
        this.invalidCredentials = true;
        console.log(error.message);
      }
    },
    toggleAuthType() {
      if (this.authType === "login") {
        this.authType = "signup";
      } else {
        this.authType = "login";
      }
    },
  },
  computed: {
    formBtnCaption() {
      let typeSubmit;
      let typeToggle;
      if (this.authType === "login") {
        typeSubmit = "Login";
        typeToggle = "Signup Instead";
      } else {
        typeSubmit = "Signup";
        typeToggle = "Login Instead";
      }

      return {
        submit: typeSubmit,
        toggle: typeToggle,
      };
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin: 0;
}

.invalid-cred {
  text-align: right;
  color: red;
}
.form-control {
  margin: 1rem 0;
}

.form-control label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

/* .form-control label::before {
        content: '*';
        color: red;
        padding: 0.4rem;
    } */

.form-control input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
}
</style>