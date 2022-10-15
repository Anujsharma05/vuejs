<template>
<input type="text" v-model="person.name">
  <p>that's what she said</p>
  <button v-on:click="callApi">Call Api</button>

  <ul>
    <li v-for="survey in surveys" :key="survey.id">
      {{ survey.name }} || {{ survey.rating }}
    </li>
  </ul>
  <parent-component
    :name="person.name"
    :callBackFn="myMethod"
  ></parent-component>
</template>

<script>
import ParentComponent from "./components/ParentComponent.vue";
export default {
  name: "App",
  components: {
    ParentComponent,
  },
  data() {
    return {
      person: {
        name: "Anuj",
        age: 25,
        gender: "Male",
      },
      survey: {
        id: null,
        name: "",
        rating: "",
      },
      surveys: [],
      pincode: "3030",
    };
  },
  provide() {
    return {
      personInfo: this.person,
      getDataBack: this.resultBack,
    };
  },
  methods: {
    myMethod(event) {
      console.log("call back function working");
      console.log(event.num);
    },
    resultBack(event) {
      console.log("result back");
      console.log(event.a);
    },
    async callApi() {
      const response = await fetch(
        "https://dummy-a349f-default-rtdb.firebaseio.com/surveys.json"
      );
      console.log('abcd');
      const responseData = await response.json();

      for (let id in responseData) {
        this.surveys.push({
          id: id,
          name: responseData[id].name,
          rating: responseData[id].rating,
        });
      }

      console.log("outside");
    },
  },
};
</script>

