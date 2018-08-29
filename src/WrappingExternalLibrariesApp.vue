<template>
	<div id="app" class="container bg-presentation">
		<date-picker v-model="date" :options="{ disableWeekends: true }"></date-picker>
	</div>
</template>

<script>
import DatePicker from './components/DatePicker.vue'

export default {
	components: {
		DatePicker
	},
	data () {
		return {
			date: "2018-08-29"
		}
	}
}
</script>