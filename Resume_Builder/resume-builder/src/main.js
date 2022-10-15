import { createApp, defineAsyncComponent } from 'vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import router from './router.js';
import store from './store/index.js';

import App from './App.vue';

// import BaseModal from './components/BaseModal.vue';

const BaseModal = defineAsyncComponent(() => import('./components/BaseModal.vue'));

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component('DatePicker', Datepicker);
app.component('base-modal', BaseModal);

app.use(router);
app.use(store);

app.mount('#app');