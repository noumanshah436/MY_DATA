<template>
  <h2>Component F</h2>
  <h3>Component F username - {{ userName }}</h3>
</template>

<script>
export default {
  name: 'ComponentF',
  // got the provided property from root component
  inject: ['userName'],
}
</script>

<style scoped>
</style>
