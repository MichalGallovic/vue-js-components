<template>
	<div class="modal-backdrop">
		<div class="modal">
			<h4>Do you really want to delete this account ?</h4>
			<div class="mt-4 flex flex-row">
				<button class="btn btn-red" @click="$emit('confirm')">Delete account</button>
				<button class="btn btn-grey ml-2" @click="$emit('cancel')">Cancel</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			
		}
	}
}
</script>