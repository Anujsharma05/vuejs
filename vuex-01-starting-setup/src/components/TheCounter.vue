<template>
  <h3>Normal Increment: {{ counterValue }}</h3>
  <button @click="addTen">Add 10</button>
  <p>{{ rootData }}</p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    methods: {
        addTen() {
            // this.$store.commit('increase', { num: 20 });

            // this.$store.dispatch({
            //     type: 'increase',
            //     obj: {
            //         num: 10,
            //         value: 20
            //     }
            // });
            this.inc({obj: { num: 10, value: 20 }});
        },
        ...mapActions('numbers', {
            inc: 'increase'
        })
    },
    computed: {
        rootData() {
            return this.$store.getters.authData;
        },
        ...mapGetters('numbers', ['counterValue'])
    }
}
</script>