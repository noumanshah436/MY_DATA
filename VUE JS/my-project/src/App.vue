<template>
  <div>
    <ul>
      <li v-for="i in people" :key="i">{{ i}}</li>
    </ul>

    <p v-if="show">Hellow world</p>
    <p>{{ showDate()   }}</p>
  </div>
</template>

<script>
export default {

  name: "App",
  data: function () {
    return {
      people: ['Nouman', '2', '2'],
      show: true
    }
  },
  methods:{
    add(a,b){return a+b},

    showDate(){
      return new Date("November 19, 1998 12:00:00");
    }
  }

};
</script>

<style>

</style>
