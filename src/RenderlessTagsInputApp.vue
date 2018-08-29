<template>
	<div id="app" class="container bg-presentation">
		<!-- LAYOUT 1 -->
		<renderless-tags-input v-model="tags">
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

		<!-- LAYOUT 2 -->

		<renderless-tags-input v-model="tags">
			<div class="tags mt-4" slot-scope="{ tags, addTag, removeTag, inputValue, inputEvents }">
				<h4 class="mb-2 inline-block">Tags</h4>
				<button class="btn btn-blue ml-2" @click="addTag">Add</button>
				<ul class="list-reset flex flex-row mt-2">
					<li class="border border-grey rounded mr-2 text-xs p-1 bg-grey-lighter" 
						v-for="tag in tags" :key="tag">
					{{ tag }}
					<span @click="removeTag(tag)">&times;</span>
					</li>
				</ul>
				<input class="tags-input mt-2"
					v-bind:value="inputValue"
					v-on="inputEvents"
					placeholder="Add tag ..."
				>
			</div>
		</renderless-tags-input>
	</div>
</template>

<script>
import RenderlessTagsInput from './components/renderless/RenderlessTagsInput.vue'

export default {
	components: {
		RenderlessTagsInput
	},
	data () {
		return {
			tags: ['php', 'javascript', 'java']
		}
	}
}
</script>