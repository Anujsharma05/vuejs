<template>
  <div class="container">
    <h2>Views by Category</h2>
    <apexchart
      width="500"
      type="pie"
      :options="catOptions"
      :series="catSeries"
    ></apexchart>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                catSeries: null,
                catOptions: null
            }
        },
        created() {
            const pageViewsByCategory = this.$store.getters.pageViewsByCategory;

            this.catSeries = [];
            this.catOptions = {
                labels: []
            }

            for(let key in pageViewsByCategory) {
                this.catOptions.labels.push(key);
                this.catSeries.push(pageViewsByCategory[key]);
            }
        }
    }
</script>