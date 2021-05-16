<template>
  <div class="quote-grid">
    <div class="quote-block" v-for="(quote, index) in quotes" :key="index" @click="removeQuote(index)">{{quote}}</div>
  </div>
</template>

<script>
  export default {
    name: 'QuoteGrid',
    props: {
      quotes: Array
    },
    methods: {
      removeQuote: function(index) {
        this.quotes.splice(index, 1);
      }
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap');

  .quote-block {
    display: inline-block;
    width: 200px;
    padding: 1.5rem 1rem;
    box-shadow: 1px 1px 1px 1px gray;
    margin: 1.2rem;
    word-wrap: break-word;
    vertical-align: top;
    cursor: pointer;
    font-family: 'Original Surfer', cursive;
  }

  .quote-block:hover {
    background: lightgray;
  }
</style>