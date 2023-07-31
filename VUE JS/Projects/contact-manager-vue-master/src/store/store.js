import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		filter: '',
    contacts: [
      {
        id: 1,
        name: "Carlo Franzin",
        phone: "0123456789",
        address: "123, Some Street\nLeicester\nLE1 2AB",
        email: "cf@gmail.com",
        website: "carlofrce GitHub API and any pul.li",
        notes: ""
      },
      {
        id: 2,
        name: "Declan Purr",
        phone: "91234859",
        address: "234, Some Street\nLeicester\nLE1 2AB",
        email: "declan@somewhere.com",
        website: "declanpopo.me",
        notes: "Some notes about the contact."
      },
      {
        id: 3,
        name: "Karan Bro",
        phone: "2345678",
        address: "234, Fake Ave\nBristol\nBS1 2AB",
        email: "karan@codomain.com",
        website: "karankey.com",
        notes: ""
      }
    ]
	},
	getters : {
		contacts : state => {
			return state.contacts;
		},
		filter : state => {
			return state.filter;
		},
  },
  actions: {
    
  },
	mutations: {
    updateContact: (state, contact) => {
      const old = state.contacts.find(c => c.id === contact.id);
      Object.assign(old, contact);
    },
		addContact: (state, contact) => {
			state.contacts.push(contact);
		},
		removeContact: (state, contact) => {
			var idx = state.contacts.indexOf(contact);
			state.contacts.splice(idx,1);
		},
		setFilter: (state, filter) => {
			state.filter = filter;
		}
	}
});
