const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


console.log(app.$data);

const data = {
  message: 'hello',
  longMessage: ''
}

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
  }
}
const proxy = new Proxy(data, handler);

proxy.message = 'hello!!';