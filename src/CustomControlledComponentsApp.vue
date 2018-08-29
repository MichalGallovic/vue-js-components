<template>
	<div id="app" class="container bg-presentation">
		<tags-input :tags="tags" @update:tags="newTags => tags = newTags"></tags-input>
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