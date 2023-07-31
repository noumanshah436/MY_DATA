<template>
  <div>
    <button @click="incrementCount">Clicked {{ count }} times</button>
    <button @click="decrementCount">decrementCount</button>

  </div>
</template>

<script>
import CounterMixin from '../mixins/counter'
export default {
  name: 'ClickCounter',
  mixins: [CounterMixin],
  data() {
    return {
      count: 100,
    }
  },
  methods: {
    decrementCount() {
      this.count -= 1
    }
  }
}
</script>

<style scoped>
</style>
