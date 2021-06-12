<template>
    <div class="base-card">
        <slot></slot>
    </div>
</template>

<style scoped>
.base-card {
    border-radius: 10px;
    box-shadow: 0 1px 9px #9b9696;
    padding: 1rem;
    width: 50%;
    min-width: 290px;
    margin: 2rem auto;
}
</style>