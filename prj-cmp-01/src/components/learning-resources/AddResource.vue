<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template v-slot:default>
      <p>Unfortunately, at least one input value is invalid</p>
      <p>Please check all inputs and make sure enter at least a few characters into each input field</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" ref="titleRef" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" ref="descRef" rows="3"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" ref="linkRef" />
      </div>
      <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog },
  name: 'AddResource',
  inject: ['newResource'],
  data: function() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    submitData: function() {
      const title = this.$refs.titleRef.value;
      const desc = this.$refs.descRef.value;
      const link = this.$refs.linkRef.value;

      if(title.trim() === '' || desc.trim() === '' || link.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }

      this.newResource(title, desc, link);  
    },
    confirmError: function() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
