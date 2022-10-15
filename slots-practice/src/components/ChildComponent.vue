<template>
  <slot name="heading"></slot>
  <div v-if="this.$slots['second-heading']">
    <h2>conditional heading</h2>
    <slot name="second-heading">
      <h2>Default second heading</h2>
    </slot>
  </div>
  <slot></slot>

  <!-- scoped slots -->
  <slot name="mySlot" :item="item" anotherProp="qwerty"></slot>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
      return {
          item: 'abcd'
      }
  },
  mounted() {
    console.log(this.$slots.heading);
  },
};
</script>