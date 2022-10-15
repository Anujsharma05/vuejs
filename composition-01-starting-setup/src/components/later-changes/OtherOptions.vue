<template>
  <h1>Template Refs, Props, Emitting Custom Events, Provide/Inject</h1>
  <section class="container">
    <div id="template-refs">
      <h2>{{ username }}</h2>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" ref="usernameInput" />
      </div>
      <button @click="setUsername">Set name</button>
    </div>

    <div id="props">
      <show-data
        name="constantine"
        :firstname="firstname"
        :lastname="lastname"
        :age="age"
        @custom-event="testingEventEmit"
      >
        <template v-slot:test-slot>
          <h3>testing the slot</h3>
        </template>

      </show-data>

      <div>
        <label for="firstname"
          >First name
          <input type="text" id="firstname" v-model="firstname" />
        </label>
      </div>
      <div>
        <label for="lastname"
          >Last name
          <input type="text" id="lastname" v-model="lastname" />
        </label>
      </div>
      <label>Age</label><br />
      <input type="number" v-model.number="age" />
    </div>
  </section>
</template>

<script>
import { ref, provide } from 'vue';

import ShowData from './ShowData.vue';

export default {
  components: {
    ShowData,
  },
  setup() {
    const username = ref('');
    const usernameInput = ref(null);

    const firstname = ref('');
    const lastname = ref('');
    const age = ref('');

    // * Provide in composition api
    provide('userAge', age);

    function setUsername() {
      // * In options API, this.$refs.usernameInput.value
      // usernameInput.value to access the composition ref, last value for $refs value
      username.value = usernameInput.value.value;
    }

    function testingEventEmit(value) {
      console.log(value);
    }

    return {
      username,
      usernameInput,
      setUsername,

      firstname,
      lastname,
      age,
      
      testingEventEmit
    };
  },
};
</script>