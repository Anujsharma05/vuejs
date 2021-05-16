<template>
  <div id="app">
   <app-header class="header-component" :quoteCount="countValue" :maxCount="maxCount"></app-header>
   <app-new-quote :quotes="quotes" :maxCount="maxCount" @get-count="updateCount"></app-new-quote>
   <app-quote-grid :quotes="quotes"></app-quote-grid>

  </div>
</template>

<script>
import Header from './components/Header'
import NewQuote from './components/NewQuote'
import QuoteGrid from './components/QuoteGrid'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appNewQuote: NewQuote,
    appQuoteGrid: QuoteGrid
  },
  data: function() {
    return {
      quotes: [],
      quoteCount: 0,
      maxCount: 10
    }
  },
  methods: {
    updateCount: function(value) {
      this.quoteCount = value;
    }
  },
  computed: {
    countValue: function() {
      return this.quotes.length;
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  #app {
    margin: 1rem 3rem;
  }

  .header-component {
    margin-bottom: 2rem;
  }
</style>

