<template>
  <teleport to="body">
    <div class="backdrop"></div>
    <section>
      <h3>Request Failed</h3>
      <p>{{ error }}</p>
      <div class="action">
        <base-button mode="flat">Close</base-button>
      </div>
    </section>
  </teleport>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

section {
  position: fixed;
  top: 30vh;
  left: 20%;
  width: 60%;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
}

h3 {
  text-align: center;
  margin-top: 0;
}

.action {
    text-align: right;
}
</style>

