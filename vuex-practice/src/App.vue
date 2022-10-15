<template>
 <section>
  <button @click="toggle=!toggle">Toggle</button>
   <div v-if="toggle">
    <h3>{{ counter }}</h3>
   <h3>{{ fastCounter }}</h3>
   <h3>{{ loginStatus }} </h3>
   <button @click="inc">increment</button>
   <button @click="dec">decrement</button>
   </div>
   <div v-else>
      <test-comp>hello world</test-comp>
   </div>
 </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import TestComp from './components/TestComp.vue';
  // import { mapActions } from 'vuex';
  export default {
    name: 'App',
    components: {
      TestComp
    },
    data() {
      return {
        incrementBy: 3,
        decrementBy: 2,
        toggle: false
      }
    },
    methods: {

      // ...mapActions('counter', ['decrement', 'testAction']),

      inc: function() {
        // this.$store.commit('increment', this.incrementBy);

        // this.$store.commit({
        //   type: 'increment',
        //   num: this.incrementBy
        // })

        this.$store.dispatch({
          type: 'numbers/increment',
          num: this.incrementBy
        });
      },
      dec() {
        // this.$store.dispatch({
        //   type: 'decrement',
        //   num: this.decrementBy
        // })

        this.$store.dispatch('numbers/decrement', { num: this.decrementBy });
      },
      testMethod() {
        const testText = this.$store.getters['testing/testOne'];
        console.log(testText);
      }
    },
    computed: {
      // counter() {
      //   return this.$store.getters.counter;
      // },
      // fastCounter() {
      //   return this.$store.getters.fastCounter;
      // }

      ...mapGetters(['loginStatus']),
      ...mapGetters('numbers', {
        counter: 'counter',
        fastCounter: 'fastCounter'
      })
    }
  }
</script>