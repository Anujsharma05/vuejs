<template>
  <li class="to-do-item">
    <base-form
      v-if="inEditMode"
      :item="item"
      :isNewItem="isNewItem"
      @project-value="updateProject"
      @title-value="updateTitle"
    >
      <template class="form-buttons">
        <base-button @click="inEditMode = false">Close X</base-button>
      </template>
    </base-form>

    <section v-else class="show-item">
      <span class="item-title">{{ item.title }}</span>
      <span class="item-project">{{ item.project }}</span>

      <div class="action-buttons">
        <slot name="deleteButton"></slot>
        <button @click="setEditMode" v-if="!isCompleted">Edit</button>
      </div>
    </section>
    <div class="status-button">
      <base-button :taskStatus="taskStatus" @click="completeTask">{{ taskStatus }}</base-button>
    </div>
  </li>
</template>

<script>
export default {
  emits: {
    "project-value": {
      type: String,
    },
    "title-value": {
      type: String,
    },
  },
  props: {
    item: {
      type: Object,
    },
  },
  data: function() {
    return {
      inEditMode: false,
      isNewItem: false,
      isCompleted: false,
      taskStatus: 'Pending'
    };
  },
  methods: {
    setEditMode: function() {
      this.inEditMode = true;
      this.isNewItem = false;
    },
    updateProject: function(value) {
      this.$emit("project-value", value);
    },
    updateTitle: function(value) {
      this.$emit("title-value", value);
    },
    completeTask: function() {
      this.taskStatus = 'Completed';
      this.isCompleted = true;
    }
  },
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

.form-buttons {
  display: flex;
}

.form-buttons > * {
  width: 100%;
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

@media (max-width: 350px) {
  .to-do-item {
    width: 260px;
  }
}
</style>
