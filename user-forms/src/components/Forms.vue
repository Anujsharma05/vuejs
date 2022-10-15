<template>
  <div id="forms">
    <button @click="switchPage = !switchPage">Switch Page</button>
    <template v-if="switchPage">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="userData.name" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model.lazy="userData.password" />
      </div>
      <div>
        <textarea id="message" rows="5" v-model="message"></textarea>
      </div>
      {{ userData.name }} | {{ userData.password }}
      <br />
      {{ printPassword }}
      <br />
      {{ message }}
      <hr />
      <div>
        <input
          type="checkbox"
          id="apple"
          v-model="fruits"
          value="apple"
        /><label for="apple">Apple</label>
        <br />
        <input
          type="checkbox"
          id="mango"
          v-model="fruits"
          value="mango"
        /><label for="mango">Mango</label>
        {{ fruits }}
      </div>
      <hr />
      <div>
        <input type="radio" id="male" value="male" v-model="gender" /><label
          for="male"
          >Male</label
        >
        <br />
        <input type="radio" id="female" value="female" v-model="gender" /><label
          for="female"
          >Female</label
        >
        <br />
        {{ gender }}
      </div>
      <hr />
      <div>
        <select v-model="choose" multiple>
          <option disabled value="">Please select one</option>
          <option
            v-for="(x, index) in selectOptions"
            :key="index"
            :selected="x == 'C'"
          >
            {{ x }}
          </option>
        </select>
        <br />
        {{ choose }}
      </div>
      <div><input type="checkbox" v-model="check" />{{ check }}</div>
      <div>
        internal working of vmodel
        <br />
        <input type="text" :value="text" @input="text = $event.target.value" />
        <br />
        {{ text }}
      </div>

      <div>
        FORMS
        <form>
          <input type="text" v-model="name" />
          <br />
          <input type="password" v-model="password" />

          <button @click.prevent="submitted">Submit</button>
        </form>
      </div>
    </template>
    <template v-else>
      <!-- <app-custom v-model="dataSwitch"></app-custom> -->
      <!-- above line is equivalent to below -->
      <app-custom
        :modelValue="dataSwitch"
        @update:modelValue="xyz"
      ></app-custom>
    </template>
  </div>
</template>

<script>
import CustomComp from "./CustomComp";

export default {
  name: "Forms",
  components: {
    "app-custom": CustomComp,
  },
  data() {
    return {
      userData: {
        name: "",
        password: "",
      },
      message: "",
      fruits: [],
      gender: "male",
      choose: [],
      selectOptions: ["A", "B", "C", "D"],
      check: true,
      text: "",
      name: "",
      password: "",
      switchPage: false,
      dataSwitch: 9000,
    };
  },
  watch: {
    "userData.password": function () {
      console.log("inside watch");
    },
  },
  computed: {
    printPassword: function () {
      return "this is the password from computed:" + this.userData.password;
    },
  },
  methods: {
    submitted: function () {
      //  TODO: this is important
      console.log(this.name + " " + this.password);
    },
    xyz(value) {
      console.log("inside xyz");
      console.log(value);
    },
  },
};
</script>