<template>
  <h1 class="yellow">Provide Inject</h1>
  <h3>Parent component {{ name }}</h3>
  <h3>Parent component {{ count }}</h3>
  <h3>Parent component {{ firstName }} {{ lastName }}</h3>
  <button @click="incrementCount">Increment count</button>
  <ChildA />
  <h1 class="yellow">end</h1>
</template>

<script>
import { provide, ref, reactive, toRefs } from 'vue'
import ChildA from './ChildA.vue'
export default {
  components: { ChildA },
  name: 'ProvideInject',
  setup() {
    const count = ref(0)
    const state = reactive({
      firstName: 'Bruce',
      lastName: 'Wayne',
    })
    function incrementCount() {
      count.value++
    }
    // provide(key, value)         // syntax
    provide('c_userName', 'Codevolution')
    provide('c_count', count)
    provide('c_hero', state)
    provide('incrementCount', incrementCount)

    return {
      count,
      incrementCount,
      ...toRefs(state),
    }
  },
  data() {
    return {
      name: 'Vishwas',
    }
  },
  provide() {
    return {
      userName: this.name,
    }
  },
}
</script>

<style scoped>
</style>

<!--

  using ootion API:   we provide userName and access it in nested component ChildC


 -->
