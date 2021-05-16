<template>
  <button type="button" :class="buttonClass">
    <slot>abcd</slot>
  </button>
</template>

<script>
export default {
  props: {
    styleDanger: {
      type: Boolean,
      required: false,
    },
    taskStatus: {
      type: String,
      required: false,
    },
  },
  computed: {
    buttonClass: function() {
      return {
        "style-danger": this.styleDanger,
        "style-pending": this.taskStatus == "Pending",
        "style-completed": this.taskStatus == "Completed",
      };
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem;
  border: 1px solid rgb(154, 154, 245);
  background: #cec9ff;
  color: #2a2a66;
  cursor: pointer;
}

button:hover {
  border: 1px solid #2a2a66;
}

button:active {
  background: #5b5bc7;
  color: white;
  outline: none;
}

.style-danger {
  border: 1px solid #d36b6b;
  color: red;
}

.style-danger:hover {
  border: 1px solid red;
}

.style-danger:active {
  background: #f03d3d;
  color: white;
}

.style-pending,
.style-pending:hover,
.style-pending:active {
  color: red;
  border: 1.7px solid red;
  font-weight: bold;
  background: none;
}

.style-completed,
.style-completed:hover,
.style-completed:active {
  color: green;
  border: 1.7px solid green;
  font-weight: bold;
  background: none;
}
</style>
