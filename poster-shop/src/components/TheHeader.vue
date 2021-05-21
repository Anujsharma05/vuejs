<template>
  <header>
       <div>
    <img src="../assets/logo.png">
    <h1>Vue.js Poster Shop</h1>
   </div>
   <section>
      <input type="text" ref="searchTerm"><button type="button" @click="sendSearchTerm">Search</button>
    </section>
  </header>
</template>

<script>
    export default {
        emits: {
            'search-term': {
                type: String
            }
        },
       methods: {
           sendSearchTerm: function() {
               let term = this.$refs.searchTerm.value;
               this.$emit('search-term', term);
           }
       },
       mounted() {
           this.$refs.searchTerm.value = 'cat';
       }
    }
</script>

<style scoped>

header {
    text-align: center;
}
img {
    width: 38px;
    height: 38px;
    vertical-align: middle;
}

h1 {
    display: inline-block;
    vertical-align: middle;
}
</style>