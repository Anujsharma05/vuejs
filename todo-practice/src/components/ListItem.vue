<template>
  <li>
    <task-form v-if="isEditMode" accessType="update" :task="task" @updateTask="updateTask" @cancelUpdate="isEditMode = false"></task-form>
    <div v-if="!isEditMode">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
      <button @click="isEditMode = true">Edit</button>
      <button @click="deleteTask">Delete</button>
      <div class="status" @click="finishTask"><span>{{ task.status }}</span></div>
    </div>
  </li>
</template>

<script>
import TaskForm from './TaskForm.vue';
export default {
  name: "ListItem",
  emits: ['updateTask', 'deleteTask', 'finishTask'],
  components: {
      TaskForm
  },
  props: {
    task: {
      type: Object,
    },
  },
  data() {
      return {
          isEditMode: false
      }
  },
  methods: {
      updateTask(modifiedTask) {
          this.$emit('updateTask', modifiedTask);
          this.isEditMode = false;
      },
      deleteTask() {
          this.$emit('deleteTask', this.task.id);
      },
      finishTask() {
        if(this.task.status === 'pending') {
          this.$emit('finishTask', this.task.id);
        }
      }
  }

};
</script>

<style scoped>
li {
  position: relative;
  padding: 1rem;
  box-shadow: 0px 1px 4px grey;
  margin: 1rem;
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 2rem;
  /* border: 1px solid #eee; */
}

h3 {
  margin: 0;
}

.status {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
  width: 100%;
  background-color: var(--secondary-color);
  text-align: center;
  cursor: pointer;
}
</style>