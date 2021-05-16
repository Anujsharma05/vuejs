<template>
  <ul>
    <learning-resource
      v-for="(resource, index) in resources"
      :key="resource.id"
      :res="resource"
      :index="index"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource';

export default {
  name: 'StoredResources',
  components: {
    LearningResource
  },
  inject: {
    resources: {
      type: Array
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
