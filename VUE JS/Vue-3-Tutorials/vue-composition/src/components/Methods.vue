<template>
  <h1 class="yellow">Replacing methods</h1>


  <!-- Options API -->
  <h2>{{ name }}</h2>
  <button @click="setName">Set Name</button>

  <!-- ref -->
  <h2>{{ count }}</h2>
  <button @click="incrementCount">Increment Count</button>

  <!-- reactive -->
  <h2>{{ first }} {{ last }}</h2>
  <button @click="changeHero">Change Hero</button>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'Methods',
  setup() {
    // using ref
    const count = ref(0)
    function incrementCount() {
      count.value++
    }

    // using reactive
    const state = reactive({
      first: 'Bruce',
      last: 'Wayne',
    })
    function changeHero() {
      state.first = 'Clark'
      state.last = 'Kent'
    }

    return {
      count,
      incrementCount,
      ...toRefs(state),
      changeHero,
    }
  },

  // options API
  data() {
    return {
      name: 'Vishwas',
    }
  },
  methods: {
    setName() {
      this.name = 'Codevolution'
    },
  },
}
</script>

<style scoped>
</style>
