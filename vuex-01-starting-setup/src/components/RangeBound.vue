<template>
  <h3>Counter x 2: {{ simpleData }}</h3>
  <h3>Normalized: {{ boundedData }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        simpleData() {
            return this.$store.getters['numbers/finalCounter'];
        },
        // boundedData() {
        //     return this.$store.getters.normalizedCounter;
        // }

        // ...mapGetters(['normalizedCounter'])
        ...mapGetters('numbers', {
            boundedData: 'normalizedCounter'
        })
    }
}
</script>