<template>
  <div>
    <input type="text" ref="inputRef" />
    <!-- <PostList ref="postListRef" /> -->
  </div>
</template>

<script>
// import PostList from './PostList.vue'
export default {
  name: 'TemplateRef',
  components: {
    // PostList,
  },
  mounted() {
    // console.log(this.$refs.postListRef)
    this.$refs.inputRef.focus()
  },
}
</script>

<style scoped>
</style>

<!--


templat-ref allow you to access dom nodes directly within view.

ref is uded to register a reference to an html element


If ref is used on the plane dom element, the reference will be that element,
and if ref is used on the child component, the reference will be the component instance.
-->
