<template>
	<div>
		<div class="page-header">
			<h1>Add Contact</h1>
		</div>
		<form v-on:submit.prevent="onSubmit">
			<div class="row">
				<div class="col">
					<div class="form-group row">
						<label for="cName" class="col-sm-4 col-form-label">Name</label>
						<div class="col-sm-8">
							<input type="text" v-model="contact.name" class="form-control" name="name" id="cName">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-4 col-form-label">Phone Number</label>
						<div class="col-sm-8">
							<input type="text" v-model="contact.phone" class="form-control" name="phone" id="cPhone">
						</div>
					</div>
					<div class="form-group row">
						<label for="cAddress" class="col-sm-4 col-form-label">Address</label>
						<div class="col-sm-8">
							<textarea v-model="contact.address" name="address" id="cAddress" class="form-control"></textarea>
						</div>
					</div>
				</div> <!-- left column --> 
				<div class="col">
					<div class="form-group row">
						<label for="cEmail" class="col-sm-4 col-form-label">Email Address</label>
						<div class="col-sm-8">
							<input type="email" v-model="contact.email" class="form-control" name="email" id="cEmail">
						</div>
					</div>
					<div class="form-group row">
						<label for="cWebsite" class="col-sm-4 col-form-label">Website</label>
						<div class="col-sm-8">
							<input type="text" class="form-control" v-model="contact.website" name="website" id="cWebsite">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-4 col-form-label">Notes</label>
						<div class="col-sm-8">
							<textarea class="form-control" 
								v-model="contact.notes" 
								id="cNotes" 
								name="notes"
								v-tooltip.bottom="tooltipNotesText"
							></textarea>
						</div>
					</div>
				</div> <!-- right column -->
			</div>
			<div class="row">
				<div class="card col bg-light">
					<div class="card-body col-md-3 offset-md-2">
						<button class="btn btn-primary" >
							Add Contact
						</button>
					</div>
				</div>
			</div>
		</form>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			contact: {},
			tooltipNotesText : 'Any additional information about the contact.'
		}
	},
	methods: {
		onSubmit() {
			this.$store.commit('addContact',this.contact);
		}
	},
};
</script>

<style scoped>

</style>
