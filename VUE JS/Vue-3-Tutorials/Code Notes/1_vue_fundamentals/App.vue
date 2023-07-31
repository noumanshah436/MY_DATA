<template>
  <!-- Binding Text -->
  <div>{{ greet }} {{ name }}</div>

  <!-- Binding HTML -->
  <div v-html="channel"></div>
  <div v-html="hack"></div>

  <!-- Bidning Attributes -->
  <h2 :id="headingId">Heading</h2>
  <button :disabled="isDisabled">Bind</button>

  <!-- Binding Classes -->
  <h2 class="underline">Underlined Text</h2>
  <h2 :class="status">Status</h2>
  <h2 class="underline" :class="status">Static Dynamic</h2>
  <h2 :class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h2 :class="isSoldOut ? 'sold-out' : 'new'">Soldout? Movie</h2>

  <!-- <h2 class="new promoted">Newly Promoted Movie</h2> -->
  <h2 :class="['new', 'promoted']">Newly Promoted Movie</h2>

  <h2 :class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']">
    Array Conditional Movie
  </h2>
  <h2
    :class="{
      promoted: isPromoted,  //   key(class to be applied) , value (condition )
      new: !isSoldOut,
      'sold-out': isSoldOut,
    }"
  >
    Object Conditional Movie
  </h2>

  <!-- Binding Inline Styles -->
  <!--
    style will get object
    key will be the css attribute and
    value can be static or dynamic
   -->
  <h2
    :style="{
      color: highlightColor,
      fontSize: headerSize + 'px',
      padding: '20px',
    }"
  >
    Inline Style
  </h2>
  <h2 :style="headerStyleObject">Style Object</h2>
  <div :style="[baseStyleObject, successStyleObject]">Success Style</div>
  <div :style="[baseStyleObject, dangerStyleObject]">Danger Style</div>

  <!-- Conditional Rendering -->
  <h1 v-if="num === 0">The number is zero</h1>
  <h2 v-else-if="num < 0">The number is negative</h2>
  <h2 v-else-if="num > 0">The number is positive</h2>
  <h2 v-else>Not a number</h2>
  <template v-if="showElement">
    <!-- template serves as an invisible wrapper -->
    <h2>Vishwas</h2>
    <h2>Codevolution</h2>
    <h2>Vue 3</h2>
  </template>
  <!-- using v-show, the element remain in the dom with the display:none if expression returns false -->
  <h2 v-show="showElement">Using v-show</h2>

  <!-- List Rendering -->
  <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name.first">
    {{ name.first }} {{ name.last }}
  </h2>
  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
  </div>
  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>
  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr />
  </template>
  <!-- conditional list rendering,
      we cannot mix v-for and v-if.
      v-if has higher precedence over v-if
  -->
  <template v-for="name in names" :key="name">
    <h2 v-if="name === 'Bruce'">{{ name }}</h2>
  </template>

  <!-- Methods -->
  <h2>{{ 2 + 3 + 5 }}</h2>
  <h2>{{ 5 + 10 + 15 }}</h2>
  <h2>Add method - {{ add(2, 3, 5) }}</h2>
  <h2>Add method - {{ add(5, 10, 15) }}</h2>
  <h2>Multiply method - {{ multiply(10) }}</h2>
  <!-- no need to use this keyword when passing as argument -->
  <h2>Multiply method - {{ multiply(baseValue) }}</h2>

  <!-- Event Handling -->
  <h2>{{ name }}</h2>
  <div>
    <!-- change name property -->
    <button v-on:click="name = 'Nouman'"  >Change name</button>
    <!-- mouseover -->
    <p v-on:mousemove="name = 'Syed Nouman'">{{name}}</p>
    <br>

    <!-- it automatically send event object, if we do not pass any argument -->
    <!--  if you're handling events using methods and there is no parameter, you can just simply pass the method name. `changeName`.
        - if you're handling multiple events separated by commas, then you will have to explicitly define like method call as `changeName(), increment(1)`, Doing `changeName, increment(1)` won't  -->

        <button @click="changeName">Change name </button>
    <button @click="changeName($event), increment(1, $event)">Change name</button>
  </div>
  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="count+=1">Increment</button> <!--inline expression-->
    <button @click="increment(1, $event)">Increment</button>
    <button @click="decrement(1)">Decrement</button>
    <button @click="increment(5)">Increment 5</button>
    <button @click="decrement(5)">Decrement 5</button>
  </div>

  <!-- Form Handling -->
  <div>
    <pre>
      {{ JSON.stringify(formValues, null, 2) }}
    </pre>
  </div>
  <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim="formValues.name" />
      <input type="text" id="name" v-model.trim.lazy="formValues.name" />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model="formValues.profileSummary" />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job location</label>
      <select id="job-location" v-model="formValues.jobLocation" multiple>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <input
        id="rememberMe"
        type="checkbox"
        v-model="formValues.rememberMe"
      />
      <label for="rememberMe">Remember me</label>
    </div>
    <div>
      <input
        id="remoteWork"
        type="checkbox"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <!-- radio group -->
    <div>
      <label>Years of Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOfExperience"
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOfExperience"
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOfExperience"
      />
      <label for="6-10">5-10</label>
      <input
        type="radio"
        id="10+"
        value="10+"
        v-model="formValues.yearsOfExperience"
      />
      <label for="10+">10+</label>
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="formValues.age" />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>

  <!-- 21 - Modifiers
    v-model.number    -- bind value as number
    v-model.trim      -- remove white spaces

    v-model.lazy
    -- bind on change-event instead of input-event ( it will not change field value immediately, it change when we un-focus or leave that field)
    -- it increase performance as it do not bind on every key stroke
    -- it usefull in form-validations

    @submit.prevent     -- do work of  event.preventDefault()
    @keyup.enter="submitForm"      -- on hit enter-key (event) , it call  submitForm function

    v-once is used to optimize update performance, the element with v-once are treated as static
    and cannot be changed after initial render.

    v-pre skips compilation for the corresponding element

  -->


  <!-- Bonus Directives -->
  <h2 v-once>{{ name }}</h2>
  <button @click="name = 'Batman'">Change name</button>
  <h2 v-pre>{{ name }}</h2>

  <!-- Computed Properties -->
  <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
  <h2>Fullname - {{ fullName }}</h2>
  <h2>
    Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
  </h2>
  <h2>Computed Total - {{ total }}</h2>
  <h2>Method Total - {{ getTotal() }}</h2>

  <!-- to demonstrate re-calculation of computed-property -->
  <button @click="items.push({ id: 4, title: 'Keyboard', price: 50 })">
    Add item
  </button>

  <!-- to demonstrate the difference between methods add computed properties,
        Compueted-property will not be computed on change of independent attributre -->
  <div>
    <input type="text" v-model="country" />
  </div>

  <!-- Computed Properties and v-for -->
  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.id === 1">{{ item.title }} - {{ item.price }}</h2>
  </template>
  <h2 v-for="item in expensiveItems" :key="item.id">
    {{ item.title }} - {{ item.price }}
  </h2>
  <button @click="changeFullName">Change fullname</button>

  <!-- Watchers -->
  <h2>Volume Tracker (0-20)</h2>
  <h3>Current Volume - {{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>

  <!-- Immediate and Deep Watchers -->
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
  <button @click="movieList = movieList.concat(['Wonder Woman'])">
    Add movie
  </button>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Vishwas",
      greet: "Hello",
      channel: "<b>Codevolution</b>",
      hack: `<a href="#" onclick="alert('You have been hacked!')">Win a prize!<a/>`,
      headingId: "heading",
      isDisabled: true,
      status: "danger",
      isPromoted: false,
      isSoldOut: true,
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid darkred",
      },
      num: 1,
      showElement: false,
      names: ["Bruce", "Syed", "Diana"],
      fullNames: [
        { first: "Bruce", last: "Wayne" },
        { first: "Syed", last: "Nouman" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "American Psycho"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Vishwas",
        channel: "Codevolution",
        course: "Vue 3",
      },
      baseMultiplier: 5,
      baseValue: 2,
      count: 0,
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        rememberMe: false,
        remoteWork: "no",
        skillSet: [],
        yearsOfExperience: "",
        age: null,
      },
      firstName: "Bruce",
      lastName: "Wayne",
      items: [
        {
          id: 1,
          title: "TV",
          price: 100,
        },
        {
          id: 2,
          title: "Phone",
          price: 200,
        },
        {
          id: 3,
          title: "Laptop",
          price: 300,
        },
      ],
      country: "",
      volume: 16,
      movie: "batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Batman", "Superman"],
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    // use this keyword to access data property.
    // we should use regular functions instead of arrow function, as we cannot use this keyword there.
    multiply(num) {
      return num * this.baseMultiplier;
    },
    increment(num, event) {
      this.count += num;
      console.log(event);
    },
    decrement(num) {
      this.count -= num;
    },
    changeName(event) {
      this.name = "Batman";
      console.log("Event", event);
    },
    submitForm(event) {
      // event.preventDefault();
      console.log("Event", event);

      console.log("form values", this.formValues);
    },
    getTotal() {
      console.log("getTotal method");
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
    changeFullName() {
      console.log("changeFullName called")
      this.fullName = "Syed Farhan";
    },
  },
  computed: {
    // if dependencies change, the computed property will be re-calculated
    // why we do not use methods instead of computed properties:
    //   Because the computed properties are cached and will not be re-calculated on re-renders if dependencies are not changing.
    //   This means that if something independent of the computed property changes on the page, and the UI is re-rendered,
    //   the casehd result will be returned and computed property will not be re-calculated.
    //   This will improve performance by avoiding potentially expensive operations
    fullName: {
      get() {  // called when we get fullName property
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) { // called when we set fullName property
        console.log("fullName set value")
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    total() {
      // If items array changes, the total property will be re-calculated
      console.log("total computed property");
      return this.items.reduce(
        (total, curr) => (total = total + curr.price),
        0
      );
    },
    expensiveItems() {
      return this.items.filter((item) => item.price > 100);
    },
  },
  watch: {

    // volume(newValue , oldValue){
    //   if (newValue > oldValue && newValue === 16) {
    //     alert(
    //       "Listening to a high volumne for a long time may damage your hearing"
    //     );
    //   }
    // },
    volume: {
      handler(newValue, oldValue) {    //  same function we write alone above
        if (newValue > oldValue && newValue === 16) {
          alert(
            "Listening to a high volumne for a long time may damage your hearing"
          );
        }
      },
      immediate: true,
      //  immediate: true, will inform the view that the handler function should be run initially on page load as well.
    },

    movie: {
      handler(newValue) {
        console.log(`Calling API with movie name = ${newValue}`);
      },
      immediate: true,
    },

    // by default watcher will not watch for changes in deeply nested properties of an object or array
    movieInfo: {
      handler(newValue) {
        console.log(
          `Calling API with movie title = ${newValue.title} and actor = ${newValue.actor}`
        );
      },
      deep: true,
    },

    movieList: {
      handler(newValue) {
        console.log(`Updated list ${newValue}`);
      },
      // deep: true,
    },

    // If you want to watch an array or object and you are mutating them instead of returning a new reference, you need to use the deep property in the watcher.
    // However if you return a new reference, then deep property is not required.
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
