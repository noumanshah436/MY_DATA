<template>
  <div>
    <div class="page-header">
      <h1>All Contacts</h1>
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id">
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.phone }}</td>
            <td>
              <router-link class="btn btn-secondary btn-sm" role="button"
                :to="{ name : 'Contact', params: { contactId : contact.id}}">View
              </router-link>
              <button type="button" class="btn btn-danger btn-sm" @click="remove(contact)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    remove(contact) {
      this.$store.commit('removeContact',contact);
    }
  },
  computed: {
    contacts() {
      let result = [];
      const filter = this.$store.getters.filter;
      console.log('filter', filter);
      if(filter !== '') {
        const re = new RegExp(filter,'i')
        result = this.$store.getters.contacts.filter(contact => {
          return re.test(contact.name);
        });
      } else {
        result = this.$store.getters.contacts;
      }  
      return result;
    }
  },
};
</script>

<style scoped>

</style>
