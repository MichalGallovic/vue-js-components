<template>
	<div id="app" class="container bg-presentation">
		<tags-input v-model="tags"></tags-input>
	</div>
</template>

<script>
import TagsInput from './components/TagsInput.vue'

export default {
	components: {
		TagsInput
	},
	data () {
		return {
			tags: ["php", "python", "javascript"]
		}
	}
}
</script>