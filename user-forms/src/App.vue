<template>
  <div id="app">
    <button @click="selectedComponent = 'app-mytable'">My Table</button>
    <button @click="selectedComponent = 'app-forms'">Forms</button>

    <div>
      <component :is="selectedComponent"></component>
    </div>
  </div>
</template>
<script>
import Forms from './components/Forms'
import MyTable from './components/MyTable'

export default {
  name: 'App',
  components: {
    'app-forms': Forms,
    'app-mytable': MyTable,
  },
  data: function() {
    return {
      selectedComponent: 'app-mytable'
    }
  }
  
  
}
</script>

<style>
  
</style>