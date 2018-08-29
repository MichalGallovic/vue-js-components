<script>
export default {
	model: {
		prop: 'tags',
		event: 'update:tags'
	},
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
	},
	render () {
		return this.$scopedSlots.default({
			inputValue: this.input,
			inputEvents: {
				input: (e) => this.input = e.target.value,
				keydown: (e) => {
					if (e.key == "Enter") {
						e.preventDefault();
						this.addTag();
					}

					if (e.key == "Backspace") {
						this.handleBackspace();
					}
				}
			},
			tags: this.tags,
			addTag: this.addTag,
			removeTag: this.removeTag
		});
	}
}
</script>