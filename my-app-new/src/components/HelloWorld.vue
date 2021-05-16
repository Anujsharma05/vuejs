<template class="hello-world">
  <div>
    <h1>{{msg}}</h1>
    <button @click="changeName">change</button>
  </div>
</template>

<script>
  import { eventBus } from '../main';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
      changeName() {
        this.msg = 'msg updated from child';
        this.$emit('name-reset', this.msg);
      }
    },
    created() {
      eventBus.$on('age-was-edited', (age) => {
        console.log('event listened and output here ' + age);
      })
    }
  };
</script>
 