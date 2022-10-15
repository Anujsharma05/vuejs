<template>
 <div>
   <Header></Header>
   <router-view></router-view>
   <footer>
     <router-view name="footer"></router-view>
   </footer>
 </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 1rem;
  padding: 1rem;
}
</style>