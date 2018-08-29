<template>
	<div class="tags">
		<h4 class="mb-4">Tags</h4>
		<input class="tags-input"
			v-model="input"
			placeholder="Add tag ..."
			v-on:keydown.enter="addTag"
			v-on:keydown.backspace="handleBackspace"
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
</template>

<script>
export default {
	props: ['tags'],
	data () {
		return {
			input: "",
		}
	},
	computed: {
		newTag () {
			return this.input.trim();
		}
	},
	methods: {
		removeTag (tag) {
			this.$emit('update:tags', this.tags.filter((t) => t != tag))
		},
		handleBackspace () {
			if (this.newTag.length === 0) {
				this.$emit('update:tags', this.tags.slice(0, -1));
			}
		},
		clearInput () {
			this.input = "";
		},
		addTag () {
			if (this.newTag.length === 0 || this.tags.includes(this.newTag)) {
				return;
			}
			this.$emit('update:tags', [...this.tags, this.newTag]);
			this.clearInput();
		}
	}
}
</script>