<template>
  <div>
    <!-- using v-bind="$attrs", non-props attributes will be applied to said element -->

    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? 'Yes' : 'No' }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Article default title',
    },
    likes: Number,
    isPublished: {
      type: Boolean,
      required: true,
    },
  },
  // prevent to apply non-prop attributes to the root node
  inheritAttrs: false,
}
</script>

<style scoped>
</style>
