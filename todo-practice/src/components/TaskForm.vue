<template>
  <div>
    <form @submit.prevent>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          v-model="description"
        />
      </div>
      <div class="form-action">
        <button @click="createTask" v-if="accessType === 'create'">
          Create
        </button>
        <button @click="updateTask" v-else>Update</button>
        <button @click="cancelUpdate">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskForm",
  emits: ['createTask', 'updateTask', 'cancelUpdate'],
  props: {
    accessType: {
      type: String,
      required: true,
    },
    task: {
      type: Object
    },
  },
  data() {
      return {
          title: '',
          description: ''
      }
  },
  methods: {
    createTask() {
      const newTask = {
        id: new Date().getTime(),
        title: this.title,
        description: this.description,
        status: "pending",
      };

      this.$emit('createTask', newTask);
    },
    updateTask() {
        const modifiedTask = {
            id: this.task.id,
            status: this.task.status,
            title: this.title,
            description: this.description
        };

        this.$emit('updateTask', modifiedTask);
    },
    cancelUpdate() {
        this.$emit('cancelUpdate');
    }
  },
  mounted() {
    if(this.accessType === 'update') {
        this.title = this.task.title;
        this.description = this.task.description;
    }
  }
};
</script>

<style scoped>
  .form-control {
    margin: 1rem;
  }
  .form-control input{
    display: block;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid var(--secondary-color);
  }
  /* .form-control input:active {
    outline: none;
  } */
</style>