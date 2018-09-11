<template>
	<div class="container bg-presentation">
		<div class="card mx-auto mt-32" style="opacity: 0.7;">
			<div class="card-content">
				{{ account.name }}
				<delete-account-button class="ml-2" :account-id="account.id">
				</delete-account-button>
			</div>
		</div>
		<portal-target name="modals"></portal-target>
	</div>	
</template>

<script>
import DeleteAccountButton from './components/DeleteAccountButton.vue'

export default {
	components: {
		DeleteAccountButton
	},
	data () {
		return {
			account: {
				name: "John Doe",
				id: 42
			}
		}
	}
}
</script>