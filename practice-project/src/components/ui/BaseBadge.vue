<template>
    <div :class="'badge-'+area">
        {{ areaName }}
    </div>
</template>

<script>
export default {
    props: {
        area: {
            type: String,
            required: true
        }
    },
    computed: {
        areaName() {
            return this.area.toUpperCase();
        }
    }
}
</script>

<style scoped>
div {
    display: inline-block;
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
}

.badge-frontend {
    background-color: burlywood;
}

.badge-backend {
    background-color: #00a87b;
}

.badge-career {
    background-color: darkgoldenrod;
}
</style>