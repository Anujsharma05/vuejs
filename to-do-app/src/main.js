import { createApp } from 'vue'
import App from './App'
import BaseForm from './components/UI/BaseForm'
import BaseButton from './components/UI/BaseButton'

const app = createApp(App);

app.component('base-form', BaseForm);
app.component('base-button', BaseButton);

app.mount('#app');

