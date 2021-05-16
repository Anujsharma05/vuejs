<template>
    <li @click="setActive" :class="{'service-selected': isActive}">
        <span>{{ service.name }}</span>
        <span>${{ formatPrice(service.price) }}</span>
    </li>
</template>

<script>
    export default {
        props: {
            service: {
                type: Object,
                required: true
            }
        },
        methods: {
            formatPrice: function(price) {
                return price.toFixed(2); 
            },
            setActive: function() {
                this.isActive = !this.isActive;
                let price = 0;
                if(this.isActive) {
                    price = this.service.price;
                } else {
                    price = -this.service.price;
                }

                this.$emit('set-price', price);
            }
        },
        data: function() {
            return {
                isActive: false
            }
        }
    }
</script>

<style scoped>

    li {
        background-color: #e35885;
        display: flex;
        justify-content: space-between;
        padding: 1.5rem 1.5rem;
        margin-bottom: 1rem;
        min-width: 400px;
        cursor: pointer;
    }

    li span {
        font-weight: bold;
        font-size: 1.5rem;
    }

    .service-selected {
        background-color: #8ec16d;
    }

</style>