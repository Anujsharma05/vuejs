<template>
    <ul>
        <service-item v-for="service in services" :key="service.id" :service="service" @set-price="setTotal" />
    </ul>
</template>

<script>
    import ServiceItem from './ServiceItem'

    export default {
        components: {
            ServiceItem
        },
        props: {
            services: {
                type: Array,
                required: true
            }
        },
        data: function() {
            return {
                total: 0
            }
        },
        methods: {
            setTotal(price) {
                this.total = this.total + price;
                this.$emit('total-price', this.total);
            }
        }
    }
</script>

<style scoped>
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        flex-direction: column;
        align-items: center;
        border-bottom: 1px solid white;
    }

    ul > * {
        width: 100%;
    }

    .service-item {
        background-color: blue;
    }
</style>