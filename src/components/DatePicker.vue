<template>
	<input :value="value" ref="input" :placeholder="format">
</template>

<script>
import Pickaday from 'pikaday'
import "pikaday/css/pikaday.css"

export default {
	props: {
		value: { required: true },
		format: { default: "YYYY-MM-DD" },
		options: {  default: () => new Object() }
	},
	mounted () {
		const picker = new Pickaday({
			field: this.$refs.input,
			format: this.format,
			onSelect: () => {
				this.$emit("input", picker.toString())
			},
			...this.options
		});
	},
}
</script>