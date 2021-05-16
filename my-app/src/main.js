import { createApp } from Vue
import App from './App.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();
// export default eventBus;

var vm1 = createApp(App).mount('#app')

vm1.component('my-cmp', {
  data: function() {
    return {
      status: 'critical'
    }
  },
  template: '<div><p>Server status = {{ status }}</p> <br> <button @click="update">Update</button></div>',
  methods: {
    update: function() {
      this.status = 'normal';
    }
  }
});

vm1.component('app-home', Home);