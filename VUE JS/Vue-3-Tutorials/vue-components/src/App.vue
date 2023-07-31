<template>
  <!-- Props -->
  <!-- it is convention to use kabab-case for props in html and use camelCase in script tag for the same property
        The conversion from kabab to camel case is handled by vue itself  -->
  <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />

  <!--  using v-bind syntax, name is referring to a data property  -->
  <Greet :name="name" :hero-name="channel" />

  <!-- using v-bind 50 is now trated as number,
       so include v-bind if you are sending non-string values as props   -->
  <!-- when a component returns a single root node, non-prop attributes (like id here ) will automatically be added to the root node of that component -->
  <Article
    id="my-article"
    title="Article Title"
    :likes="50"
    :isPublished="true"
  />

  <!-- Provide/ Inject -->
  <h3>App component {{ name }}</h3>
  <ComponentC />

  <!-- Events -->
  <button @click="showPopup = true">Show Popup</button>
  <!-- bind the custom_event( close event ) to appropriate handler -->
  <Popup v-show="showPopup" @close="closePopup" />

  <!-- custom input component-->
  <Input v-model="username" />
  <hr>

  <!-- Slots -->
  <h1>Slots</h1>
  <Card></Card>
  <Card>Card Content</Card>
  <Card><img src="https://picsum.photos/200" /></Card>

  <!-- Named Slots -->
  <Card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <img src="https://picsum.photos/200" />
    </template>
    <template v-slot:footer>
      <button>View Details</button>
    </template>
  </Card>

  <!-- Slot Props -->
  <NameList>
    <!-- slotProps is an object which contain all the props sent from the child component -->
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>

  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.lastName }}, {{ slotProps.firstName }}
    </template>
  </NameList>

  <h4>App component Text</h4>
  <ChildStyles>
    <h4>ChildStyles component Text</h4>
  </ChildStyles>

  <!-- Dynamic Components -->
  <button @click="activeTab = 'TabA'">Tab A</button>
  <button @click="activeTab = 'TabB'">Tab B</button>
  <button @click="activeTab = 'TabC'">Tab C</button>

  <!--
    KeepAlive is a built-in component that allows us to conditionally cache component instances when dynamically switching between multiple components.
    Use keep alive tag when you want to maintain dynamic component state even if it is inactive or to prevent re-rendering of the component for performance reasons.

    component tag is used to render component specified with the is prop
  -->

  <keep-alive>
    <component :is="activeTab"></component>
  </keep-alive>

  <!-- Teleport Component -->
  <!-- teleporting allows us to move one element from one place to another -->
  <!-- it allows us to define a component in one place and render it in a different position in the DOM tree even outside the scope of view application  -->
  <!-- we can pass any css-selector as a value of 'to' to teleport to that element -->
  <teleport to="#portal-root">
    <Portal />
  </teleport>
</template>

<script>
import Article from './components/Article.vue'
import Greet from './components/Greet.vue'
import ComponentC from './components/ComponentC.vue'
import Popup from './components/Popup.vue'
import Input from './components/Input.vue'
import Card from './components/Card.vue'
import NameList from './components/NameList.vue'
import ChildStyles from './components/ChildStyles.vue'
import TabA from './components/TabA.vue'
import TabB from './components/TabB.vue'
import TabC from './components/TabC.vue'
import Portal from './components/Portal.vue'

export default {
  name: 'App',
  components: {
    Greet,
    Article,
    ComponentC,
    Popup,
    Input,
    Card,
    NameList,
    ChildStyles,
    TabA,
    TabB,
    TabC,
    Portal,
  },
  data() {
    return {
      name: 'Vishwas',
      channel: 'Codevolution',
      showPopup: false,
      username: '',
      friends: ['Chandler', 'Joey', 'Monica'],
      activeTab: 'TabA',
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false
      console.log('name', name)
    },
  },
  provide() {
    return {
      userName: this.name,
    }
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>
