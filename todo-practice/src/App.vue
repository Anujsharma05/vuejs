<template>
  <div class="app-container">
    <app-header></app-header>
    <task-list></task-list>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import TaskList from './components/TaskList.vue';

  export default {
    name: 'App',
    components: {
      'app-header': Header,
      TaskList
    }
  }
</script>

<style>
  :root {
    --main-color: #3B1C32;
    --secondary-color: #B96D40;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  .app-container {
    width: 60%;
    margin: 0 auto;
    padding: 1rem;
  }
</style>