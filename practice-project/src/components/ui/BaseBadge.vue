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
}

.badge-frontend {
    background-color: burlywood;
}

.badge-backend {
    background-color: cadetblue;
}

.badge-career {
    background-color: darkgoldenrod;
}
</style>