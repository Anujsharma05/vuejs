<template>
    <section>
        <h3>Find your Coach</h3>
        <div>
            <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
            <label for="frontend">Frontend</label>
        </div>
        <div>
            <input type="checkbox" id="backend" value="backend"  v-model="areas" />
            <label for="backend">Backend</label>
        </div>
        <div>
            <input type="checkbox" id="career" value="career" v-model="areas" />
            <label for="career">Career</label>
        </div>
    </section>
</template>

<script>
    export default {
        emits: ['setFilter'],
        data() {
            return {
                areas: ['frontend', 'backend', 'career']
            }
        },
        created() {
            this.$emit('setFilter', this.areas);
        },
        watch: {
            'areas'(curVal) {
                this.$emit('setFilter', curVal);
            }
        },
    }
</script>

<style scoped>
    div {
        display: inline-block;
        padding-right: 1rem;
    }
</style>