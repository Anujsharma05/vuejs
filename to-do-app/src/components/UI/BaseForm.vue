<template>
  <form :class="{ 'form-new': isNewItem }">
    <div class="form-control">
      <label for="title" :class="{ 'align-center': isNewItem }">Title</label>
      <input
        type="text"
        id="title"
        v-model="title"
        :class="{'border-red': isTitleEmpty}"
        @blur="checkTitleEmpty"
      />
    </div>

    <div class="form-control">
      <label for="project" :class="{ 'align-center': isNewItem }"
        >Project</label
      >
      <input
        type="text"
        id="project"
        v-model="project"
      />
    </div>
    <div class="form-buttons" v-if="isNewItem">
      <base-button @click="addNewItem">Create</base-button>
      <base-button :style-danger="true" @click="checkNewItem(false)">Cancel</base-button>
    </div>
    <div class="form-control" v-else>
      <div class="form-buttons">
        <base-button @click="updateExistingItem">Update</base-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  emits: {
    "add-new-item": {
      type: Object,
    },
    "update-item": {
      type: Object,
    },
  },
  props: {
    isNewItem: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object
    },
    checkEditMode: {
      type: Function
    },
    checkNewItem:{
      type: Function
    }
  },
  data: function () {
    return {
      title: "",
      project: "",
      isTitleEmpty: false
    };
  },
  mounted() {
    if (!this.isNewItem) {
      this.title = this.item.title;
      this.project = this.item.project;
    }
  },
  methods: {
    checkTitleEmpty() {
      if(this.title.trim() == '') {
        this.isTitleEmpty = true;
      } else {
        this.isTitleEmpty = false;
      }
    },
    verifyItem: function () {
      if (this.title.trim() == "") {
        this.isTitleEmpty = true;
        return null;
      }

      let newItem = {
        title: this.title,
        project: this.project,
        isCompleted: false,
      };

      return newItem;
    },
    addNewItem: function () {
      let newItem = this.verifyItem();
      if(newItem != null) {
        this.$emit("add-new-item", newItem);
      }
    },
    updateExistingItem: function() {
      let item = this.verifyItem();

      if(item != null) {
        this.checkEditMode(false);
        this.$emit("update-item", item);
      } else {
        this.checkEditMode(true);
      }
    },
    cancelItem: function() {
      console.log('a')
    }
  },
  computed: {
    checkTitle: function() {
      if(this.isTitleEmpty) {
        return {

        };
      }

      return null;
    } 
  },
};
</script>

<style scoped>
.form-control {
  padding: 0.5rem;
}
label {
  /* font-weight: bold; */
  display: block;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #22242626;
}

.form-new {
  box-shadow: 0px 1px 4px grey;
  width: 280px;
  padding: 1rem;
  border-radius: 0.5rem;
}

.form-buttons {
  display: flex;
}

.form-buttons > * {
  width: 100%;
}

.align-center {
  text-align: center;
}

.border-red{
  border: 1px solid red;
  border-radius: 0.5rem;
}

.border-red:focus {
  border: none;
  
}
</style>
