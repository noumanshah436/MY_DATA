export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount() {
      this.count += 1
    }
  }
}
// good_boy

// mixins allow as to share functionality accross components

// 1)
// different options can be used in mixins
//    data
//    methods
//    watchers
//    computed propertiesfe
//    life cycle hooks

// 2)
//    merging of different options:
//    when we have the same option in the mixin as well as in component, then by default the component will get the higher priority.
