<template>
  <header>
    <h1>
      YOLO PET ADOPTION
    </h1>
  </header>
  <main>
    <div class="backdrop" v-if="showPopup"></div>
    <div class="pet-details__modal" v-if="showPopup">
      <h1>My Name is {{ selectedPet.name }}!</h1>
      <div class="pet-info__basic">
        <div class="pet-image__container"><img src="./assets/cat.jpg" /></div>
        <div class="pet-description">
          <h2>Facts About Me</h2>
          <ul>
            <li>Animal Type: {{ selectedPet.species}}</li>
            <li>Gender: {{ selectedPet.gender }}</li>
            <li>Age: {{ selectedPet.age }}</li>
            <li>Description: {{ selectedPet.notes }}</li>
            <li>Adoption Fee: $199</li>
          </ul>
        </div>
      </div>
      <div class="action-button">
        <button>Adopt Me!</button>
        <button @click="showPopup = false">Close</button>
      </div>
    </div>
    <ul class="pets">
      <li v-for="pet in pets" :key="pet.name" @click="petSelection(pet)">
        <div class="img-container">
          <img src="./assets/cat.jpg">
        </div>
        <div class="description">
          <span class="name">{{ pet.name }}</span
          ><span class="age">({{ pet.age }} Months)</span>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      pets: [],
      selectedPet: {},
      showPopup: false
    };
  },
  mounted() {
    fetch("pets.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.pets = data.pets;
      });
  },
  methods: {
    petSelection: function(pet) {
      this.selectedPet = pet;
      this.showPopup = true;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Roboto Mono", monospace;
}

header h1 {
  color: white;
  background: #2b2b83;
  margin: 0;
  padding: 2rem;
  text-align: center;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.6);
}

.pet-details__modal {
  box-shadow: 0px 1px 10px gray;
  position: fixed;
  background: white;
  z-index: 2;
  width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  overflow: hidden;
  padding: 1.5rem;
}

.pet-details__modal h1 {
  text-align: center;
}

.pet-image__container {
  display: inline-block;
  width: 35%;
  height: 300px;
  vertical-align: top;
}

.pet-image__container img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.pet-description {
  display: inline-block;
  width: 50%;
  height: 300px;
  vertical-align: top;
  padding: 1rem;
  margin-left: 1rem;
}

.pet-description h2 {
  margin: 0;
}

.pet-description ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pet-description li {
  padding: 0.8rem 1.5rem;
}

.action-button {
  text-align: right;
}

.action-button button {
  margin: 1rem;
  padding: 1rem 2rem;
  color: white;
  background: #e229b4;
}

.action-button button:hover {
  background: #6b0e54;
  cursor: pointer;
}


.pets {
  list-style: none;
  padding: 0;
  width: 70%;
  margin: 4rem auto;
}

.pets li {
  display: inline-block;
  width: 40%;
  margin: 2rem;
  padding: 1rem;
  box-shadow: 0px 1px 4px gray;
  vertical-align: middle;
  border-radius: 10px;
}

.pets li:hover {
  color: blue;
  cursor: pointer;
}

.pets img {
  display: inline-block;
  width: 100%;
  height: 300px;
  font-size: 0;
  border-radius: 10px;
  transform: scale(0.9);
  transition: transform 300ms 0ms ease-out;
}

.pets img:hover {
  transform: scale(1);
}

.pets .description {
  text-align: center;
  height: 60px;
}

.description span {
  /* font-family: 'Roboto Mono', monospace; */
  font-size: 2rem;
}

.description .age {
  font-size: 1.5rem;
}

@media (max-width: 930px) {
  .pets li {
    display: block;
    width: 80%;
    margin: 2rem auto;
    min-width: 320px;
  }
}
</style>
