<template>
  <div class="container">
    <h2>New vs Returning Visitors</h2>
    <apexchart
      width="500"
      type="bar"
      :options="visitorOptions"
      :series="visitorSeries"
    ></apexchart>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                visitorOptions: null,
                visitorSeries: null
            }
        },
        created() {

            const newVsReturning = this.$store.getters.newVsReturning;

            this.initializeData();

            for(let { date, new: newData, old: oldData } of newVsReturning) {
                this.visitorSeries[0].data.push(newData);
                this.visitorSeries[1].data.push(oldData);
                this.visitorOptions.xaxis.categories.push(date);
            }
        },
        methods: {
            initializeData() {
                this.visitorSeries = [
                    {
                        name: 'New',
                        data: []
                    },
                    {
                        name: 'Old',
                        data: []
                    }
                ];

                this.visitorOptions = {
                    chart: {
                        stacked: true
                    },
                    xaxis: {
                        categories: []
                    }
                }
            }
        }
    }
</script>