<template>
  <section>
    <div>
    <data-replacement v-if="isDataPart"></data-replacement>
    <method-replacement v-if="isMethodPart"></method-replacement>
    <assignment-file1 v-if="isAssignment1"></assignment-file1>
    <computed-replacement v-if="isComputed"></computed-replacement>
    <watch-replacement v-if="isWatch"></watch-replacement>
    <assignment-file2 v-if="isAssignment2"></assignment-file2>
  </div>

  <div>
    <other-options v-if="isOtherOptions"></other-options>
  </div>
  </section>
</template>

<script>
import DataReplacement from './components/core-changes/DataReplacement.vue';
import MethodReplacement from './components/core-changes/MethodReplacement.vue';
import AssignmentFile1 from './components/assignment/AssignmentFile1.vue';
import ComputedReplacement from './components/core-changes/ComputedReplacement.vue';
import WatchReplacement from './components/core-changes/WatchReplacement.vue';
import AssignmentFile2 from './components/assignment/AssignmentFile2.vue';

import OtherOptions from './components/later-changes/OtherOptions.vue';

import { ref } from 'vue';

export default {
  components: {
    DataReplacement,
    MethodReplacement,
    AssignmentFile1,
    ComputedReplacement,
    WatchReplacement,
    AssignmentFile2,
    OtherOptions
  },
  setup() {
    const isDataPart = ref(false);
    const isMethodPart = ref(false);
    const isAssignment1 = ref(false);
    const isComputed = ref(false);
    const isWatch = ref(false);
    const isAssignment2 = ref(false);

    const isOtherOptions = ref(true);

    return {
      isDataPart,
      isMethodPart,
      isAssignment1,
      isComputed,
      isWatch,
      isAssignment2,
      isOtherOptions
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>