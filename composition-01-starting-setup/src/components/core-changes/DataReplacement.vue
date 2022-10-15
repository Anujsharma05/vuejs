<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
// import { ref, isRef } from 'vue';
// import { reactive, isReactive } from 'vue';
import { reactive, isRef, toRefs } from 'vue';
export default {
  // setup() {
  //   //creates wrapper object
  //   const uName = ref('Anuj');

  //   setTimeout(function () {
  //     uName.value = 'Sharma';
  //   }, 3000);
  //   return {
  //     userName: uName,
  //   };
  // },

  // setup() {
  //   //ref works for string, number, object ie all data types
  //   const user = ref({
  //     name: 'Anuj',
  //     age: 26
  //   });

  //   console.log(isRef(user));

  //   setTimeout(function() {
  //     user.value.name= 'Anuj Sharma';
  //     user.value.age = 22;
  //   }, 2000)

  //   return {
  //     user: user
  //   }
  // }

  // setup() {
  //   //only works for object
  //   //Do not use the extra wrapper ie no extra 'value' key
  //   const user = reactive({
  //     name: 'Anuj',
  //     age: 26
  //   });

  //   console.log(isReactive(user.name));

  //   setTimeout(function() {
  //     user.name = 'Anuj Sharma';
  //     user.age = 22;
  //   }, 2000);

  //   return {
  //     user: user
  //   }
  // }

  setup() {
    const user = reactive({
      name: 'Anuj',
      age: 26,
    });

    // toRefs make the nested properties also reactive values
    // toRefs require a reactive(prop or reactive) object
    const userRef = toRefs(user);

    console.log(isRef(userRef));
    console.log(isRef(userRef.name));

    setTimeout(function () {
      user.name = 'Anuj Sharma';
      user.age = 22;
    }, 2000);

    return {
      user: user,
      name: userRef.name,
      age: userRef.age,
    };
  },
};
</script>