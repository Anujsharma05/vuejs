import { createApp } from 'vue';
import VueApexCharts from "vue3-apexcharts";

import store from './store.js';
import router from './router.js';

import App from './App.vue';

const app = createApp(App);

app.use(VueApexCharts);
app.use(store);
app.use(router);
// app.component("apex-chart", VueApexCharts);
app.mount('#app');