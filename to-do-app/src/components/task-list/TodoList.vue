<template>
  <div>
    <div class="tasks-count">
      <span>Completed Tasks: {{ completedTaskCount }}</span>
      <span>Pending Tasks: {{ itemList.length - completedTaskCount }}</span>
    </div>
    <ul>
      <todo-item
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        @task-completed="taskCompleted(index)"
        @update-item="updateItem($event, index)"
      >
        <template v-slot:deleteButton>
          <button @click="deleteItem(index)">Delete</button>
        </template>
      </todo-item>
    </ul>

    <section class="form-container" v-if="newItem">
      <base-form
        :isNewItem="true"
        :checkNewItem="checkNewItem"
        @add-new-item="createNewItem"
      >
        
      </base-form>
    </section>

    <div class="add-item" v-if="!newItem">
      <span @click="newItem = true">+</span>
    </div>
    <teleport to="body">
       <section v-if="openSuccessModal">
      <div class="backdrop" ></div>
      <div class="modal">
        <h1>SUCCESS!</h1>
        <p>Task Completed!</p>
        <base-button class="ok-button" @click="openSuccessModal = false">OK</base-button>
      </div>
    </section>
    </teleport>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem,
  },
  data: function() {
    return {
      itemList: [
        {
          title: "Todo A",
          project: "Project A",
          isCompleted: false
        },
        {
          title: "Todo B",
          project: "Project B",
          isCompleted: false
        },
      ],
      newItem: false,
      openSuccessModal: false
    };
  },
  methods: {
    updateItem: function(item, index) {
      this.itemList[index].title = item.title;
      this.itemList[index].project = item.project;
    },
    deleteItem: function(index) {
      this.itemList.splice(index, 1);
    },
    createNewItem: function(item) {
      this.itemList.push(item);
      this.newItem = false;
    },
    checkNewItem: function(value) {
      this.newItem = value;
    },
    taskCompleted: function(index) {
      this.itemList[index].isCompleted = true;
    }
  },
  computed: {
    completedTaskCount: function() {
      
      let count = 0;
      if(this.itemList.length > 0) {
        this.itemList.forEach(item => {
          if(item.isCompleted==true) {
            count++;
          }
        });
      } 
      
      return count;
    }
  }
};
</script>

<style scoped>

.tasks-count span {
  display: block;
  text-align: center;
  margin: 0.7rem;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 0;
}

.form-buttons [disabled] {
  background: grey;
  cursor: not-allowed;
}

.add-item {
  display: flex;
  justify-content: center;
  /* hide item when adding new item */
}

.add-item span {
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #eee;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  padding-bottom: 4px;
}

.add-item span:hover {
  border: 1px solid grey;
}

.add-item span:active {
  background: #5b5bc7;
}

.form-container {
  display: flex;
  justify-content: center;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  background: white;
  width: 40%;
  padding: 3rem;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);

}

.modal > * {
  margin: 0;
}

.modal .ok-button {
  padding: 0.5rem 1.5rem;
}
</style>
