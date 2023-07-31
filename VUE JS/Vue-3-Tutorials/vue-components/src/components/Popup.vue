<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <!-- on click of button we want to emit the close-event and
       then bind that event to proper handler in parent component-->
    <button @click="$emit('close', name)">Close Popup</button>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      name: '',
    }
  },
  // emits is an array of events that component can emit to the parent component
  emits: {
    // Validating Emitted Events
    // getting argument from the emit function (on Close Popup  button)  
    close: (name) => {
      if (!name) {
        console.warn('Invalid submit event payload!')
        return false
      } else {
        return true
      }
    },
  },
}

</script>

<style scoped>
</style>
