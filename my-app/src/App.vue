<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <my-cmp></my-cmp>
    <my-cmp></my-cmp>
    <local-cmp></local-cmp>
    <app-home :myArray="myArray" :xyz="detail"></app-home>
    <sparta :func="myFunction"></sparta>
    <button @click="print">CLICK</button>
    <hr>
    <HelloWorld :msg="msg" @name-reset="doSomething" />
    <hr>
    <SlotComponent class="dummy">
      <h1 slot="h1-slot">h1 named slot</h1>
      <!-- <h2 slot="h2-slot">h2 named slot with a default present</h2> -->
      <h3>h3 default slot with no slot attribute</h3>
    </SlotComponent>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Sparta from './components/Sparta'
import SlotComponent from './components/SlotComponent'

var cmp = {
  data:function() {
    return {
      name: 'anuj'
    }
  },
  template: '<p>my name is {{ name }} </p>'
}

export default {
  name: 'App',
  components: {
    HelloWorld,
    'local-cmp': cmp,
    Sparta,
    SlotComponent
  },
  data: function() {
    return {
      msg:"Welcome to Your Vue.js App",
      name: 'Bruce Wayne',
      myArray: ['apple', 'banana', 'cherry', 'orange'],
      detail: {x: 'A', y: 'B'}
    }
  },
  methods: {
    print: function() {
      console.log(this.myArray[0]);
      console.log(this.detail.x);
    },
    doSomething: function(event) {
      console.log(event);
    },
    myFunction(value) {
      var out = JSON.stringify(value);
      var res = JSON.parse(out);
      console.log('my function called:' + res.name + ' ' + res.age);
    }
  }
}
</script>

<style>
  h1 {
    color: red;
  }
</style>
