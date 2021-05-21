<template>
  <section>
    <div>
      <input type="text">
      <div class="input-wrapper" v-if="isActive">
        <input type="text" v-model="text" />
      </div>
      <p><span @click="isActive = !isActive">{{ text }}</span></p>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      text: "Edit Me",
      isActive: false
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

section {
  display: flex;
  height: 100vh;
  background: #e0e07b;
  justify-content: center;
  align-items: center;
}

div {
  position: relative;
}

.input-wrapper {
  position: absolute;
  bottom: 117%;
  left: 50%;
  
  transform: translateX(-50%);
  /* border: 5px solid #5c9bb7; */
  
}

.input-wrapper input {
text-align: center;
/* padding: 0.5rem 0.1rem; */
width: 250px;
height: 35px;
}

.input-wrapper input:active {
  border: none;
}
.input-wrapper input:focus {
  border: none;
}
p {
  margin: 0;
  width: 100vw;
  text-align: center;
}

span {
  cursor: pointer;
}
</style>