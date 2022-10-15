<template>
  <div class="container">
    <h2>Page Views</h2>
    <apexchart
      width="500"
      type="line"
      :options="pvOptions"
      :series="pvSeries"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pvSeries: null,
      pvOptions: null,
    };
  },
  created() {

    const pageViews = this.$store.getters.pageViews;

    this.initializeData();

    for (let { date, views } of pageViews) {
        this.pvOptions.xaxis.categories.push(date);
        this.pvSeries[0].data.push(views);
      }
  },
  methods: {
    initializeData() {
      this.pvOptions = {
        colors: ["#038F4B"],
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
        },
      };

      this.pvSeries = [
        {
          name: "Page Views",
          data: [],
        },
      ];
    },
  },
};
</script>