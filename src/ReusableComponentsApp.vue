<template>
	<div id="app" class="container bg-presentation">
		<fetch-json url="/fixtures/tags.json" @onDataFetched="fetchedTags => tags = fetchedTags">
			<div slot-scope="{ loading }">
				<span v-if="loading">Tags loading ...</span>
				<inline-tags-input v-else v-model="tags"></inline-tags-input>
			</div>
		</fetch-json>
	</div>
</template>

<script>
import InlineTagsInput from './components/InlineTagsInput.vue'
import FetchJson from './components/renderless/FetchJson.vue'

export default {
	components: {
		InlineTagsInput,
		FetchJson
	},
	data () {
		return {
			tags: []
		}
	}
}
</script>