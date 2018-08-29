<template>
	<renderless-tags-input :tags="tags" @update:tags="newTags => $emit('input', newTags)">
		<div class="tags" slot-scope="{ tags, addTag, removeTag, inputValue, inputEvents }">
			<h4 class="mb-4">Tags</h4>
			<input class="tags-input"
				v-bind:value="inputValue"
				v-on="inputEvents"
				placeholder="Add tag ..."
			>
			<button class="btn btn-blue ml-2" @click="addTag">Add</button>
			<ul class="list-reset flex flex-row mt-2">
				<li class="border border-grey rounded mr-2 text-xs p-1 bg-grey-lighter" 
					v-for="tag in tags" :key="tag">
				{{ tag }}
				<span @click="removeTag(tag)">&times;</span>
				</li>
			</ul>
		</div>
	</renderless-tags-input>
</template>

<script>
import RenderlessTagsInput from './renderless/RenderlessTagsInput.vue'

export default {
	model: {
		prop: "tags"
	},
	props: ["tags"],
	components: {
		RenderlessTagsInput
	},
	data () {
		return {
			
		}
	}
}
</script>