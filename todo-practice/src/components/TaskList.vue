<template>
  <section>
    <section class="stats">
      <p>Completed Tasks: {{ taskStatus.completed }}</p>
      <p>Pending Tasks: {{ taskStatus.pending }}</p>
    </section>
    <section>
      <ul>
        <list-item
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @updateTask="updateTask"
          @deleteTask="deleteTask"
          @finishTask="finishTask"
        ></list-item>

        <task-form v-if="plusClicked" accessType="create" @createTask="createTask"></task-form>
        <div class="add-button" v-else>
            <button v-if="!plusClicked" @click="plusClicked = true">+</button>
        </div>
      </ul>
    </section>
  </section>
</template>

<script>
import ListItem from "./ListItem.vue";
import TaskForm from './TaskForm.vue';

export default {
  name: "TaskList",
  components: {
    ListItem,
    TaskForm
  },
  data() {
      return {
          tasks: [],
          title: '',
          description: '',
          plusClicked: false
      }
  },
  methods: {
    createTask(task) {
        this.tasks.push(task);
        this.plusClicked = false;
    },
    updateTask(modifiedTask) {
        this.tasks.forEach((task) => {
            if(task.id === modifiedTask.id) {
                task.title = modifiedTask.title;
                task.description = modifiedTask.description;
            }
        })
    },
    deleteTask(id) {
        const index = this.tasks.findIndex((task) => task.id === id);
        this.tasks.splice(index, 1);
    },
    finishTask(id) {
      for(let task of this.tasks) {
        if(task.id === id) {
          task.status = 'completed';
          break;
        }
      }
    }
  },
  computed: {
    taskStatus() {
      let pending = 0;
      let completed = 0;

      this.tasks.forEach(task => {
        if(task.status === 'pending') {
          pending++;
        } else {
          completed++;
        }
      });

      return {
        pending: pending,
        completed: completed
      }
    }
  }
};
</script>

<style scoped>
.stats {
  text-align: center;
}

ul {
  padding: 0;
  list-style: none;
}

.add-button {
  text-align: center;
}

.add-button button {
  font-size: 2rem;
  padding: 0 0.6rem;
  cursor: pointer;
  border: 0.5px solid var(--secondary-color);
  border-radius: 5px;
  color: var(--main-color);
}

.add-button button:hover {
  background-color: var(--secondary-color);
  border: 0;
}
</style>