<template>
  <h1 class="yellow">Demo1</h1>
  <h2>{{ name }}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'DemoOne',
  setup() {
    const name = ref('Vishwas')

    setTimeout(() => {
      name.value = 'Codevolution'
    }, 2000)

    return {
      name,
    }
  },
}
</script>

<style scoped>
</style>

<!--

  when we use simple let or const declaration to store a value, vue doesn't know how to react
  to the changes in the value.

  whereas ref lets vue know that the value changed and in template where-ever name used update that value.
 -->
