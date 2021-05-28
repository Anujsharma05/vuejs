import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js'


const app = createApp(App)

//to add third party package in vue app
app.use(router);

app.mount('#app');
