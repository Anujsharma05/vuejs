<template>
  <div>
    <div class="flex-container">
      <p class="flex-item">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <p class="flex-item">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p class="flex-item">Abcd</p>
      <p class="flex-item">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <button @click="changeColor">Change Color</button>
    <hr>
    <input type="number" v-model="age" ref="userAge">
    <button @click="testNumber">Click</button>
    <base-card>
      <template #mySlot="slotProps">
         <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
      </template>
    </base-card>
  </div>
  <div>
    <form @submit.prevent="submitForm">
      <rating-control v-model:xyz="rating"></rating-control>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>

import BaseCard from './components/BaseCard'
import RatingControl from './components/RatingControl'

export default {
  name: 'App',
  components: {
    BaseCard,
    RatingControl
  },
  data: function() {
    return {
      color: 'green',
      age: null,
      rating: null
    }
  },
  methods : {
    testNumber: function() {
      console.log(typeof(this.age));
      console.log(this.age + 10);
      console.log(typeof(this.age));
      console.log(typeof(this.$refs.userAge.value));
      console.log(this.$refs.userAge.value + 10);
    },
    submitForm() {
      console.log(this.rating);
      this.rating = null;
    },
    changeColor() {
      this.color = 'blue';
    }
  }
}
</script>

<style>
  .flex-container {
    display: flex;
  }

  .flex-item {
    border: 1px solid black;
    /* width: 100%; */
    width: 500px;
  }

 

  h2 {
    color: red;
  }

  p {
    color: orange;
  }
</style>

