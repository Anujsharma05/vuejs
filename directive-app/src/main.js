import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'

const vm1 = createApp(App);


vm1.directive('highlight', {
    beforeMount(el, binding) {
        el.style.backgroundColor = 'green';
        console.log(binding);
        // el.style.backgroundColor = binding.value;
    }
});

vm1.mount('#app');