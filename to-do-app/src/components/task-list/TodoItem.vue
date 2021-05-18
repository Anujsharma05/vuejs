<template>
  <li class="to-do-item">
    <base-form
      v-if="inEditMode"
      :isNewItem="isNewItem"
      :item="item"
      :checkEditMode="checkEditMode"
      @update-item="updateItem"
    >
    </base-form>

    <section v-else class="show-item">
      <span class="item-title">{{ item.title }}</span>
      <span class="item-project">{{ item.project }}</span>

      <div class="action-buttons">
        <slot name="deleteButton"></slot>
        <button @click="setEditMode" v-if="!item.isCompleted">Edit</button>
      </div>
    </section>
    <div class="status-button" v-if="!inEditMode">
      <base-button :taskStatus="taskStatus" @click="completeTask">{{ taskStatus }}</base-button>
    </div>
  </li>
</template>

<script>
export default {
  emits: {
    "update-item": {
      type: Object,
    },
    "task-completed": {
      type: Object
    }
  },
  props: {
    item: {
      type: Object,
    }
  },
  data: function() {
    return {
      inEditMode: false,
      isNewItem: false,
      taskStatus: 'Pending'
    };
  },
  methods: {
    setEditMode: function() {
      this.inEditMode = true;
      this.isNewItem = false;
    },
    completeTask: function() {
      if(this.taskStatus == 'Pending') {
        this.taskStatus = 'Completed';
        
        this.$emit("task-completed");
      }
    },
    updateItem: function(item) {
      this.$emit("update-item", item);
    },
    checkEditMode: function(value) {
      this.inEditMode = value;
    }
  }
};
</script>

<style>
.to-do-item {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px grey;
  width: 300px;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
}

.show-item span {
  display: block;
}

.status-button {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  height: 40px;
}

.status-button > * {
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.item-title {
  font-size: 1.3rem;
}

.item-project {
  color: grey;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
}

.action-buttons > * {
  margin: 0.2rem;
}

@media (max-width: 350px) {
  .to-do-item {
    width: 260px;
  }
}
</style>
