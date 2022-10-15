<template>
    <router-link to="/users"> Users </router-link>
    <router-link to="/teams"> Teams </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  margin: 2rem;
  padding: 1rem;
  background: pink;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  font-weight: bold;
}

a:hover {
  border: 1px solid goldenrod;
}

/* passed from main js */
.active-route {
  background: rgb(61, 61, 231);
}
</style>