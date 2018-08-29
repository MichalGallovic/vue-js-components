<template>
	<div id="app" class="container bg-presentation">
		
		<primary-button>
			&darr; Download
		</primary-button>
		
		<media-card class="mt-4"></media-card>
		
		<media-card class="mt-4">
			<template slot="image">
				<img src="images/rocket.jpeg">
			</template>
			<template slot="heading">
				Falcon Heavy standing
			</template>
			<template slot="body">
				<strong>To the mooon!</strong>
				<div class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas deleniti eum sint assumenda, beatae laborum iusto modi totam molestiae adipisci repellat iure possimus voluptatem, vel eveniet? At, magnam provident earum.</div>
			</template>
		</media-card>
	</div>
</template>

<script>
import PrimaryButton from './components/slots/PrimaryButton.vue'
import MediaCard from './components/slots/MediaCard.vue'

export default {
	components: {
		PrimaryButton,
		MediaCard
	}
}
</script>