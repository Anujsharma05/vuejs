<template>
  <the-header></the-header>
  <todo-list></todo-list>
</template>

<script>

import TodoList from './components/task-list/TodoList'
import TheHeader from './components/TheHeader'

export default {
  components: {
    TodoList,
    TheHeader
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
</style>


