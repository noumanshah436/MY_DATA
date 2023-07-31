<template>
  <h1 class="yellow">Data</h1>
  <h2>Options - {{ o_firstName }} {{ o_lastName }} a.k.a {{ o_heroName }}</h2>
  <h2>Composition - {{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h2>
  <h2>Composition - {{ greet }}</h2>
  <h2>Composition - {{ greetHero }}</h2>
  <h2>Composition - {{ state.firstName }} {{ state.lastName }}  {{ state.heroName }} </h2>
  <h2>Composition - {{ reactiveGreetHero }}</h2>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'Data',
  setup() {
    // use ref function to create a reactive reference for a value
    // ref is function  which return  reactive and mutable object that serves as a reactive reference  to the internal value it is holding
    const c_firstName = ref('Clark')
    const c_lastName = ref('Kent')
    const c_heroName = ref('Superman')

    // state is the reactive object
    const state = reactive({
      firstName: 'Princess',
      lastName: 'Diana',
      heroName: 'Wonder Woman',
    })

    const greet = `Hello ${c_firstName.value}`
    const greetHero = `Hello ${c_firstName.value} ${c_lastName.value} a.k.a ${c_heroName.value}`
    const reactiveGreetHero = `Hello ${state.firstName} ${state.lastName} a.k.a ${state.heroName}`

    return {
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      greetHero,
      state,
      reactiveGreetHero,
    }
  },
  data() {
    return {
      o_firstName: 'Bruce',
      o_lastName: 'Wayne',
      o_heroName: 'Batman',
    }
  },
}
</script>

<style scoped>
</style>

<!--

  When we use ref function or reactive?

  Based on two reasons:

  1)
  use ref function when dealing with primitive types like string, boolean, number (as reactive can only accept an object)

  const isLoggedIn = ref(false)
  const isLoggedInReactive = reactive({
    value:false,
  })

  2) when you have logically realative data, you can bundle it in object using reactive

 -->

 <!--
  we replaced option api with composition api using ref and reactive fucctions
  -->
