<template>
	<div id="app" class="container bg-presentation">
		<renderless-hello-world>
			<p slot-scope="{ text }">
				{{ text }}
			</p>
		</renderless-hello-world>
	</div>
</template>

<script>
import RenderlessHelloWorld from './components/renderless/RenderlessHelloWorld.vue'
export default {
	components: {
		RenderlessHelloWorld
	}
}
</script>