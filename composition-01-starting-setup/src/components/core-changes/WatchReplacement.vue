<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>

    <button @click="changeData">Change</button>
  </section>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const userName = ref('anuj');
    const userAge = ref(22);

    function changeData() {
      userName.value = 'Sharma';
      userAge.value = 26;
    }

    // watch(userName, function (newValue, oldValue) {
    //   console.log('old name: ' + oldValue);
    //   console.log('new name: ' + newValue);
    // });

    // watch(userAge, function(newValue, oldValue) {
    //   console.log('old age: ' + oldValue);
    //   console.log('new age: ' + newValue);
    // });

    // * Is called when any of the property in array changes
    watch([userName, userAge], function(newValArr, oldValArr) {
        const [oldName, oldAge] = oldValArr;
        const [newName, newAge] = newValArr;

        console.log('old name: ' + oldName);
        console.log('new name: ' + newName);
        console.log('old age: ' + oldAge);
        console.log('new age: ' + newAge);

    })

    return {
      userName,
      userAge,
      changeData,
    };
  },
};
</script>