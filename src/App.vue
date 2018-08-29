<template>
	<div id="app" class="container bg-presentation">
		<div class="max-w-md flex flex-col">
			<h4>Controlled Native form components </h4>
			
			<input v-model="input" class="input mt-4">
			<!-- input v-model is a shorthand for -->
			<input v-bind:value="input" @input="e => input = e.target.value" class ="input mt-4">

			<textarea v-model="textarea" class="input mt-4"></textarea>
			<!-- textarea v-model is a shorthand for -->
			<textarea v-bind:value="textarea" @input="e => textarea = e.target.value" class="input mt-4"></textarea>

			<input type="checkbox" v-model="checkbox" class="mt-4">
			<!-- checkbox v-model is a shorthand for -->
			<input type="checkbox" v-bind:checked="checkbox" @change="e => checkbox = e.target.checked" class="input mt-4">

			<input type="radio" value="One" v-model="radio" class="mt-4">
			<input type="radio" value="Two" v-model="radio" class="mt-4">
			<!-- radio v-model is a shorthand for -->
			<input type="radio" value="One" v-bind:checked="radio == 'One'" @change="e => radio = e.target.value" class="mt-4">
			<input type="radio" value="Two" v-bind:checked="radio == 'Two'" @change="e => radio = e.target.value" class="mt-4">
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			input: "",
			textarea: "",
			checkbox: false,
			radio: ""
		}
	}
}
</script>