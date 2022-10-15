<template>
  <teleport to="#app">
    <child-component>
      <p>details</p>
      <template v-slot:heading>
        <h1>hello world</h1>
      </template>

      <!-- <template #second-heading>
      <h2>Second Heading</h2>
    </template> -->

      <!-- scoped slots -->
      <template v-slot:mySlot="slotProps">
        <h2>Scoped Slots Concept</h2>
        <h3>{{ slotProps.item }}</h3>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </child-component>
  </teleport>

  <hr />

  <!-- dynamic components practice -->
  <Parent></Parent>
</template>

<script>
import ChildComponent from "./components/ChildComponent.vue";
import Parent from "./components/dynamic_components/Parent.vue";

export default {
  name: "App",
  components: {
    ChildComponent,
    Parent,
  },
};
</script>

<style>
</style>
