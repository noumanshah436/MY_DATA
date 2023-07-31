<template>
	<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Contacts Manager</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{ name: 'Contacts'}" exact>Browse</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{ name: 'AddContact'}" exact>Add Contact</router-link>
          </li>  
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" v-model="filter" placeholder="Search" aria-label="Search">
        </form>
      </div>
    </nav>
	</div>
</template>

<script>
export default {
  computed: {
    filter: {
      get() {
        return this.$store.getters.filter;
      },
      set(value) {
        this.$store.commit('setFilter',value);
      }
    }
  },
};
</script>

<style scoped>

</style>
