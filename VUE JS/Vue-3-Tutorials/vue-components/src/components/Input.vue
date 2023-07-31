<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'Input',

  // when we use v-model on custom component, it automatically receives a prop called modelValue
  // but we nedd to specify it in props and bind it to the input value
  // but we still need to handle input from the user
  // when we use v-model on custom component, it automatically listen to an event called update:modelValue and
  // here we just need to emit that event with the input value

  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
}
</script>

<style scoped>
input[type='text'] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
