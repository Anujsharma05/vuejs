<template>
  <section class="charts-layout">
      <section class="toggle-chart">
        <router-link class="chart-link" to="/page-views">Page Views</router-link>
        <router-link class="chart-link" to="/category-views">Views by Category</router-link>
        <router-link class="chart-link" to="/new-vs-returning">New vs Returning Visitors</router-link>
      </section>

      <router-view></router-view>
  </section>
</template>

<style scoped>
.charts-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.toggle-chart {
    display: flex;
    width: 70%;
    justify-content: space-evenly;
}

.chart-link {
    text-decoration: none;
    color: black;
    border: 1px solid orange;
    border-radius: 10px;
    padding: 1rem;
    color: #3a2af7;
}

.chart-link:hover {
    background-color: greenyellow;
}

.router-link-active {
    background-color: greenyellow;
}
</style>



