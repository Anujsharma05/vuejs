<template>
    <button v-if="loggedIn" @click="setAuth(false)">Logout</button>
    <button v-else @click="setAuth(true)">Login</button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    methods: {
        setAuth(value) {
            this.$store.dispatch('toggleAuth', value);
        }
    },
    computed: {
        ...mapGetters(['loggedIn'])
    }
}
</script>