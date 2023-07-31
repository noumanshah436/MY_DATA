import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contacts from '@/components/Contacts'
import AddContact from '@/components/AddContact'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/add-contact',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/contact/:contactId',
      name: 'Contact',
      component: Contact
    }
  ]
})
