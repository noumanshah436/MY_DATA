<template>
	<div>
		<div v-if="isOpen">
			<textarea v-if="type === 'textarea'" class="form-control" v-model="innerValue"></textarea>
			<input v-if="type === 'input'" class="form-control" v-model="innerValue"/>
			<hr>
			<button type="button"
				class="btn btn-sm btn-success"
				@click="save()">Save</button>
			<button type="button"
				class="btn btn-sm btn-secondary"
				@click="close()">Cancel</button>
		</div>
		<div v-else>
			<span class="form-control-plaintext">
				<span v-html="this.$options.filters.paragraph(value)"></span>
				<button type="button"
					class="btn btn-sm btn-secondary"
					@click="open()">Edit</button>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			value: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'input',
				required: false
			}
		},
		data() {
			return {
				isOpen: false,
				innerValue: ''
			}
		},
		methods: {
			open() {
				this.isOpen = true;
				this.innerValue = this.value;
			},
			close() {
				this.isOpen = false;
			},
			save() {
				this.$emit('valuechanged',this.innerValue);
				this.close();
			}
		},
		filters: {
			// it is a filter
			paragraph(value) {
				let result = '';
				result = value.replace('\n','<br/>');
				return result; //thing to transform
			}
		}
	}
</script>

<style scoped>

</style>