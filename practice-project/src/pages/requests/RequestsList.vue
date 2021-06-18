<template>
    <section>
        <ul>
            <request-item v-for="(req,index) in requests" :key="index" :email="req.email" :message="req.message" ></request-item>
        </ul>
    </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
    components: {
        RequestItem
    },
    computed: {
        requests() {
            return this.$store.getters['requests/requests'];
        }
    },
    created() {
        this.$store.dispatch('requests/fetchRequests');
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}
</style>