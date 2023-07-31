<template>
  <h1 class="yellow">Demo2</h1>
  <h2>{{ firstName }} {{ lastName }}</h2>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'DemoTwo',
  setup() {
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    })

    setTimeout(() => {
      state.firstName = 'Clark'
      state.lastName = 'Kent'
      console.log(state)
    }, 2000)

    // toRefs function preserves the reactivity for the individual properties in the state object
    // we can return individual properties manually, but that didn't work correctly
    // now don't need to use state before property name in template
    return toRefs(state)
  },
}
</script>

<style scoped>
</style>
