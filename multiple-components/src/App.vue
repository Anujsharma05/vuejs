<template>
  <div id="app">
    <button @click="selectedComponent = 'app-quote'">Quote</button>
    <button @click="selectedComponent = 'app-author'">Author</button>
    <button @click="selectedComponent = 'app-new'">New</button>
  
    <keep-alive>
      <component :is="selectedComponent">
      <p>default component</p>
    </component>
    </keep-alive>

  </div>
</template>

<script>
import Quote from './components/Quote'
import Author from './components/Author'
import New from './components/New'

export default {
  name: 'App',
  components: {
    'app-quote': Quote,
    'app-author': Author,
    'app-new': New
  },
  data:function() {
    return {
      selectedComponent: 'app-quote'
    }
  }
}
</script>

<style>

</style>
