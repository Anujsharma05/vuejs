<template>
  <li>
    <h3>{{request.userEmail}}</h3>
    <p>{{ request.message }}</p>
  </li>
</template>

<script>
export default {
  props: {
    request: {
      type: Object,
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem 0;
}

h3, p {
    margin: 0;
}
</style>