<template>
  <div class="new-quote">
    <div class="quote-container">
      <label for="quote">Quote</label><br />
      <textarea
        id="quote"
        rows="5"
        v-model="quote"
      ></textarea>
      <button @click="addQuote" :disabled="quote.length <= 0">Add Quote</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewQuote",
  props: {
      quotes: Array,
      maxCount: Number
  },
  data: function() {
    return {
      quote: ""
    }
  },
  methods: {
      addQuote: function() {
        if(this.quotes.length < 10) {
             if(this.quote.length > 0) {
            this.quotes.push(this.quote);
            this.quote = '';
         }
        } else {
            alert('Please delete some quotes by clicking on the quote');
        }
      }
  }
};
</script>

<style scoped>

.quote-container {
  width: 60%;
  margin: auto;
}
.quote-container label {
    font-weight: bold;
}
.quote-container textarea {
    width: 100%;
}

.quote-container button {
    background: #3a3af8;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
}
.quote-container button[disabled] {
    background: grey;
}
</style>
