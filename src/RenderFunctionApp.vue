<template>
	<div id="app" class="container bg-presentation">
		<counter>
			<div slot-scope="{ counter, increment, decrement }">
				<span>{{ counter }}</span>
				<button class="btn btn-blue ml-4" @click="increment">Increment</button>
				<button class="btn btn-red ml-4" @click="decrement">Decrement</button>
			</div>
		</counter>
	</div>
</template>

<script>
import Counter from './components/renderless/RenderlessCounter.vue'
export default {
	components: { Counter }
}
</script>