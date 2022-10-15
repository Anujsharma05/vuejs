<template>
    <section>
        <div>
            <h1>Requests Received</h1>
        </div>
        <base-card v-if="!hasRequests">
            <h2>Requests Received</h2>
            <p>You haven't received any request yet!</p>
        </base-card>
        <ul v-else>
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
        hasRequests() {
            return this.$store.getters['requests/hasRequests'];
        },
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
h1 {
    text-align: center;
}
ul {
    list-style: none;
    padding: 0;
}
</style>