<template>
	<span>
		<img :src="url" alt="" class="rounded-circle">
	</span>
</template>

<script>

import md5 from 'md5';

export default {
	props: {
		email: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			url: ''
		}
	},
	created() {
		const md5hash = md5(this.email);
		this.url = 'http://gravatar.com/avatar/'+md5hash+'?s=50';
	}
}
</script>

<style scoped>

</style>