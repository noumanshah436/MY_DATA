<template>
	<div>
		<div class="page-header">
			<h1>
				<gravatar :email="contact.email"/>
				{{ contact.name }}</h1>
		</div>
		<form v-on:submit.prevent="onSubmit">
			<div class="row">
				<div class="col">
					<div class="form-group row">
						<label for="cName" class="col-sm-4 col-form-label">Name</label>
						<div class="col-sm-8">
							<editable :value="contact.name" @valuechanged="handleChange('name',$event)"></editable>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-4 col-form-label">Phone Number</label>
						<div class="col-sm-8">
							<editable :value="contact.phone" @valuechanged="handleChange('phone',$event)"></editable>
						</div>
					</div>
					<div class="form-group row">
						<label for="cAddress" class="col-sm-4 col-form-label">Address</label>
						<div class="col-sm-8">
							<editable :value="contact.address" type="textarea" @valuechanged="handleChange('address',$event)"></editable>
						</div>
					</div>
				</div> <!-- left column --> 
				<div class="col">
					<div class="form-group row">
						<label for="cEmail" class="col-sm-4 col-form-label">Email Address</label>
						<div class="col-sm-8">
							<editable :value="contact.email" @valuechanged="handleChange('email',$event)"></editable>
						</div>
					</div>
					<div class="form-group row">
						<label for="cWebsite" class="col-sm-4 col-form-label">Website</label>
						<div class="col-sm-8">
							<editable :value="contact.website" @valuechanged="handleChange('website',$event)"></editable>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-4 col-form-label">Notes</label>
						<div class="col-sm-8">
							<editable :value="contact.notes" 
								type="textarea" 
								@valuechanged="handleChange('notes',$event)"
							></editable>
						</div>
					</div>
				</div> <!-- right column -->
			</div>
		</form>
	</div>
</template>

<script>
import Editable from './Editable'
import Gravatar from './Gravatar'

class Contact {
	constructor() {
		this.id = 0;
		this.name = '';
		this.phone = '';
		this.address = '';
		this.email = '';
		this.website = '';
		this.notes = '';
	}
}

export default {
  created() {
		const contactId = this.$route.params.contactId;
		this.contact = this.contacts.find(contact => {
			const id = Number.parseInt(contactId);
			return id === contact.id;
		});
		console.assert(this.contact !== undefined);
  },
  data() {
    return {
			contact: new Contact(),
			
    };
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    }
	},
	methods: {
		handleChange(field, arg) {
			this.contact[field] = arg;
			this.$store.commit('updateContact',this.contact);
		}
	},
	components: {
		Editable,
		Gravatar
	}
};
</script>

<style scoped>

</style>
