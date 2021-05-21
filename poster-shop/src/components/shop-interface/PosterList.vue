<template>
  <section>
    <p>Found {{ resultLength }} results for search term cat.</p>

  <ul class="poster-grid">
    <poster-item v-for="item in result" :key="item.id" :item="item"></poster-item>
  </ul>
  </section>
</template>

<script>
import PosterItem from './PosterItem'

export default {
  components: {
    PosterItem
  },
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      result: [],
      resultLength: 0,
    };
  },
  watch: {
    searchTerm: function () {
      this.fetchPosterData();
    },
  },
  methods: {
    fetchPosterData: function () {
      fetch("./posters.json")
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("abcd");
          }
        })
        .then((data) => {
          this.result = data[this.searchTerm];
          if (this.result) {
            this.resultLength = this.result.length;
          } else {
            throw new Error("wrong search term");
          }
        })
        .catch((error) => {
          this.resultLength = 0;
          console.log(error.message);
        });
    },
  },
  created() {
    this.fetchPosterData();
  },
};
</script>

<style scoped>

.poster-grid {
  display: grid;
  gap: 2rem;
}

</style>