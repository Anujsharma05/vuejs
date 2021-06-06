<template>
  <section>
    <div class="container">
      <h1 :class="{ 'anim-blink': blinkStatus }">My Name is Anuj Sharma</h1>
      <p class="content">Welcome to my Website</p>
    </div>
    <div>
      <div class="input-wrapper" v-if="isActive">
        <input type="text" v-model="text" />
      </div>
      <p>
        <span @click="isActive = !isActive">{{ text }}</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      text: "Edit Me",
      isActive: false,
      counter: 0,
      blinkStatus: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.blinkStatus = false;
    }, 7000);
  },
};
</script>

<style>
:root {
  --bg-color: #e0e07b;
  --btn-color: #659b91;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Source Code Pro", monospace;
}

section {
  display: flex;
  height: 100vh;
  background: var(--bg-color);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
}

.container {
  display: grid;
  justify-items: center;
  /* width: max-content;
    margin: auto;
    text-align: center; */
}

h1 {
  position: relative;
}

.anim-blink::before,
.anim-blink::after {
  content: "";
  background: var(--bg-color);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.anim-blink::before {
  animation: typewriter 6s 500ms steps(22) forwards;
}

.anim-blink::after {
  background: black;
  width: 0.125rem;
  animation: typewriter 6s 500ms steps(22) forwards,
    blink 700ms infinite forwards;
}

.content {
  opacity: 0;
  transform: translateY(3rem);
  animation: fadeInUp 700ms 7s forwards;
}

@keyframes typewriter {
  to {
    left: 100%;
  }
}

@keyframes blink {
  to {
    background: transparent;
  }
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
  background: var(--btn-color);
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: bold;
}
</style>