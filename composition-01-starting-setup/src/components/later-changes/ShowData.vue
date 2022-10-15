<template>
  <div>
    <h1>Lifecycle hooks</h1>
    <section class="container">
      <h2>{{ fullname }}</h2>
      <h4>{{ age }}</h4>
      <h4>Age through provide/inject: {{ userAge }}</h4>
      <slot name="test-slot"></slot>
    </section>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstname', 'lastname', 'age'],
  emits: ['custom-event'],

  // * setup() is equivalent to beforeCreate, created lifecycle hooks
  setup(props, context) {
    onBeforeMount(function () {
      console.log('on before mount');
    });

    onMounted(function () {
      console.log('on mounted');
    });

    onBeforeUpdate(function () {
      console.log('on before updated');
    });

    onUpdated(function () {
      console.log('on updated');
    });

    onBeforeUnmount(function () {
      console.log('on before unmount');
    });

    onUnmounted(function () {
      console.log('on unmounted');
    });

    // console.dir(context);

    // * Contains any fallback props that are not defined here
    console.dir(context.attrs.name);
    console.dir(context.slots['test-slot']);

    context.emit('custom-event', 'emitting custom event');

    const fullname = computed(function () {
      return props.firstname + ' ' + props.lastname;
    });

    const userAge = inject('userAge');

    return {
      fullname,
      userAge,
    };
  },
};
</script>