<template>
  <section>
    <p>Found {{ resultLength }} results for search term cat.</p>

    <ul class="poster-grid">
      <poster-item
        v-for="item in result"
        :key="item.id"
        :item="item"
        @add-item="addToCart"
      ></poster-item>
    </ul>
  </section>
</template>

<script>
import PosterItem from "./PosterItem";

export default {
  components: {
    PosterItem,
  },
  emits: {
    'add-item': {
      type: Object
    }
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
    addToCart: function(item) {
      this.$emit('add-item', item);
    }
  },
  created() {
    this.fetchPosterData();
  },
};
</script>

<style scoped>

section {
  /* margin: 2rem 0 0 4rem; */
}

section > p {
  margin: 0 0 2rem 0;
}

.poster-grid {
  display: grid;
  gap: 2rem;
  padding: 0;
  list-style: none;
}
</style>