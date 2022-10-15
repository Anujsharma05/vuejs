<template>
    <base-card>
        <ul>
           <request-item v-for="req in requests" :key="req.id" :request="req"></request-item>
        </ul>
    </base-card>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
    created() {
        this.$store.dispatch('requests/fetchRequests');
    },
    components: {
        RequestItem
    },
    computed: {
        requests() {
            return this.$store.getters['requests/requests'];
        }
    }
}
</script>