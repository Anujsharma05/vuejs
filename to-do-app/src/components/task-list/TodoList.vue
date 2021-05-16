<template>
  <div>
    <ul>
      <todo-item
        v-for="(item, index) in itemList"
        :key="index"
        :item="item"
        @project-value="updateProject($event, index)"
        @title-value="updateTitle($event, index)"
      >
        <template v-slot:deleteButton>
          <button @click="deleteItem(index)">Delete</button>
        </template>
      </todo-item>
    </ul>

    <section class="form-container" v-if="newItem">
      <base-form
        :isNewItem="true"
        @project-value="createItemProject"
        @title-value="createItemTitle"
      >
        <template class="form-buttons">
          <base-button :disabled="!(item.title && item.project)" @click="addNewItem">Create</base-button>
          <base-button :style-danger="true" @click="cancelItem"
            >Cancel</base-button
          >
        </template>
      </base-form>
    </section>

    <div class="add-item" v-if="!newItem">
      <span @click="newItem = true">+</span>
    </div>
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
        },
        {
          title: "Todo B",
          project: "Project B",
        },
      ],
      newItem: false,
      item: {
        title: '',
        project: ''
      }
    };
  },
  methods: {
    updateProject: function(value, index) {
      this.itemList[index].project = value;
    },
    updateTitle: function(value, index) {
      this.itemList[index].title = value;
    },
    deleteItem: function(index) {
      this.itemList.splice(index, 1);
    },
    createItemProject: function(value) {
      if(value != '') {
        this.item.project = value;
      }
    },
    createItemTitle: function(value) {
      if(value != '') {
        this.item.title = value;
      }
    },
    addNewItem: function() {
      this.itemList.push(this.item);

      this.item = {
        title: '',
        project: ''
      }

      this.newItem = false;
    },
    cancelItem: function() {
      this.newItem = false;
      this.item = {
        title: '',
        project: ''
      }
    }
  },
};
</script>

<style>
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
</style>
