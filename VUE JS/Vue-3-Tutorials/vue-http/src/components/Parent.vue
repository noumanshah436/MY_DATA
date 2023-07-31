<template>
  <div>
    Parent component
    <button @click="showChild = !showChild">Toggle Child</button>
    <Child v-if="showChild" />
  </div>
</template>

<script>
import Child from './Child.vue'
export default {
  components: { Child },
  name: 'Parent',
  data() {
    return {
      showChild: true,
    }
  },
  beforeCreate() {
    console.log('Parent beforeCreate()')
  },
  created() {
    console.log('Parent created()')
  },
  beforeMount() {
    console.log('Parent beforeMount()')
  },
  mounted() {
    console.log('Parent mounted()')
  },
  beforeUpdate() {
    console.log('Parent beforeUpdate()')
  },
  updated() {
    console.log('Parent updated()')
  },
  beforeUnmount() {
    console.log('Parent beforeUnmount()')
  },
  unmounted() {
    console.log('Parent unmounted()')
  },
}
</script>

<style scoped>
</style>


<!--

created  -- best place for api calls

mounting -- mouting html to DOM

activated() and deactivated() = related to kept alive components ( dynamic )

errorCaptured()  -- called when error is captured in any decendant component
                  we can modify data property, and we can error flag to true which then renders a fallback UI in the browser

renderTracked and renderTriggered for debugging purposes
                  -->
