<template>
  <header>
    <img src="../assets/logo.png" />
    <h1>Vue.js Poster Shop</h1>
    <section class="poster-filter">
      <div>
        <input type="radio" id="cat" value="cat" v-model="poster" />
        <label for="cat">Cat</label>
      </div>
      <div>
        <input type="radio" id="dog" value="dog" v-model="poster" />
        <label for="dog">Dog</label>
      </div>
      <div>
        <input type="radio" id="flower" value="flower" v-model="poster" />
        <label for="flower">Flower</label>
      </div>
    </section>
  </header>
</template>

<script>
export default {
    emits: {
        posterType: {
            type: String
        }
    },
  data() {
    return {
      poster: "cat",
    };
  },
  watch: {
      poster(curVal) {
          this.$emit('posterType', curVal);
          console.log(this.$store.state.myField)
      }
  }
};
</script>

<style scoped>
header {
  background-color: var(--main-color);
  color: white;
  text-align: center;
  padding: 1rem;
}
img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}

h1 {
  display: inline-block;
  margin: 0;
  vertical-align: middle;
}

.poster-filter {
  padding: 1rem;
}

.poster-filter div {
  display: inline-block;
  width: 30%;
  font-weight: bold;
}
</style>