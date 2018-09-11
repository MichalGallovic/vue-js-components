<template>
	<div class="inline-block">
		<button class="btn btn-red" @click="showConfirmationModal = true">
			Delete account
		</button>
		<portal to="modals">
			<confirmation-modal 
				v-show="showConfirmationModal"
				@confirm="deleteAccount"
				@cancel="showConfirmationModal = false"
			>

			</confirmation-modal>
		</portal>
	</div>
</template>

<script>
import ConfirmationModal from './ConfirmationModal.vue'

export default {
	props: ['accountId'],
	components: {
		ConfirmationModal
	},
	data () {
		return {
			showConfirmationModal: false		
		}
	},
	methods: {
		deleteAccount () {
			// Delete account logic
			this.showConfirmationModal = false;
		}
	}
}
</script>