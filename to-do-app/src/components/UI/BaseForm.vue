<template>
  <form :class="{'form-new': isNewItem}">
    <div class="form-control">
      <label for="title" :class="{'align-center': isNewItem}">Title</label>
      <input type="text" id="title" v-model="title" @change="emitTitleValue" :class="{'border-red': isEmptyTitle}" />
    </div>

    <div class="form-control">
      <label for="project" :class="{'align-center': isNewItem}">Project</label>
      <input
        type="text"
        id="project"
        v-model="project"
        @change="emitProjectValue"
        :class="{'border-red': isEmptyProject}"
      />
    </div>

    <div class="form-control">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  emits: {
    "title-value": {
      type: String,
    },
    "project-value": {
      type: String,
    },
  },
  props: {
    item: {
      type: Object,
    },
    isNewItem: {
      type: Boolean,
      required: false
    },
  },
  data: function() {
    return {
      title: "",
      project: ""
    };
  },
  mounted() {
    if(!this.isNewItem) {
       this.title = this.item.title;
      this.project = this.item.project;
    }
  },
  methods: {
    emitTitleValue: function(event) {
      console.log(event);
      let title = event.target.value;
      if (title != "") {
        this.$emit("title-value", title);
      }
    },
    emitProjectValue: function(event) {
      let project = event.target.value;
      if (project != "") {
        this.$emit("project-value", project);
      }
    },
  },
  computed: {
    isEmptyTitle: function() {
      return this.title.trim() == '' ? true : false;
    },
    isEmptyProject: function() {
      return this.project.trim() == '' ? true : false;
    }
  }
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

.align-center {
  text-align: center;
}

.border-red {
  border: 1px solid red;
}
</style>
