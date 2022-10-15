<template>
  <section class="basic-info">
    <h3>What's the best way for employers to contact you?</h3>
    <p>We suggest including an email and phone number</p>

    <form class="personal-info" @submit.prevent="nextButton">
      <div class="form-group profile-photo">
        <span>photo</span>
      </div>

      <div class="form-group firstname">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" v-model.trim="basicInfo.firstname" />
      </div>

      <div class="form-group lastname">
        <label for="lastname">Surname</label>
        <input type="text" id="lastname" v-model.trim="basicInfo.lastname" />
      </div>

      <div class="form-group profession">
        <label for="profession">Profession</label>
        <input
          type="text"
          id="profession"
          v-model.trim="basicInfo.profession"
        />
      </div>

      <div class="form-group city">
        <label for="city">City</label>
        <input type="text" id="city" v-model.trim="basicInfo.city" />
      </div>

      <div class="form-group country-pincode">
        <div class="country">
          <label for="country">Country</label>
          <input type="text" id="country" v-model.trim="basicInfo.country" />
        </div>

        <div class="form-group pincode">
          <label for="pincode">Pin Code</label>
          <input type="text" id="pincode" v-model.trim="basicInfo.pincode" />
        </div>
      </div>

      <div class="form-group phone">
        <label for="phone">Phone</label>
        <input type="text" id="phone" v-model.trim="basicInfo.phone" />
      </div>

      <div class="form-group email">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="basicInfo.email"
          required
        />
      </div>

      <div class="form-action">
        <button type="button" @click="backButton">BACK</button>
        <button type="submit">NEXT: WORK HISTORY</button>
      </div>
    </form>
  </section>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  props: {
    setActivePage: Function,
  },
  setup() {
    const basicInfo = reactive({
      firstname: "",
      lastname: "",
      profession: "",
      city: "",
      country: "",
      pincode: "",
      phone: "",
      email: "",
    });

    const router = useRouter();
    const store = useStore();

    onMounted(function () {
      const info = store.getters.basicInfo;
      if (info) {
        // basicInfo = info;
        Object.assign(basicInfo, info);
      }
    });

    function backButton() {
      router.push({ name: "home" });
    }

    function workHistoryPresent() {
      const history = store.getters.workHistory;
      return history.length > 0;
    }

    function nextButton() {
      if (!basicInfo.email) return;

      store.dispatch("saveBasicInfo", basicInfo);

      let viewType;

      if (workHistoryPresent()) {
        viewType = "summary";
      } else {
        viewType = "form";
      }

      router.push({
        name: "work-history",
        params: { viewType: viewType },
      });
    }

    return {
      basicInfo,
      backButton,
      nextButton,
    };
  },
};
</script>

<style scoped>
h3 {
  color: var(--primary-color);
}

.personal-info {
  display: grid;
  padding: 1rem;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-areas:
    "photo      fname        lname"
    "photo      profession   profession"
    "photo      city         country-pincode"
    "...        phone        email"
    "form-action   form-action   form-action";
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  /* border: 1px solid black; */
  min-width: 0;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-group label {
  font-size: 12px;
  font-weight: bold;
}

.form-group input {
  padding: 0.5rem;
  box-shadow: none;
}

.form-group input:focus {
  /* box-shadow: none; */
  border: 1px solid var(--primary-color);
}

.profile-photo {
  grid-area: photo;
}

.firstname {
  grid-area: fname;
}

.lastname {
  grid-area: lname;
}

.profession {
  grid-area: profession;
}

.city {
  grid-area: city;
}

.country-pincode {
  grid-area: country-pincode;
  flex-direction: row;
  /* border: 1px solid black; */
  gap: 1rem;
}

.country-pincode > div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.country-pincode input {
  width: 100%;
}

.phone {
  grid-area: phone;
}

.email {
  grid-area: email;
}

.form-action {
  grid-area: form-action;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
}
</style>