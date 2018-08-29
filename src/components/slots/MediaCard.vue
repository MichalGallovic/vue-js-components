<template>
	<div class="max-w-xs rounded-lg overflow-hidden flex flex-col shadow-md">
		<slot name="image"><img src="images/matches.jpeg"></slot>
		<div class="card-content">
			<h4 class="card-heading">
				<slot name="heading">It's a match! A burning match <span class="text-xl">👨‍🚒</span></slot>
			</h4>
			<div class="card-body">
				<slot name="body">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus sint, quisquam illo excepturi soluta nemo. Temporibus vero harum, iste. Quia tenetur nostrum facere laudantium, odit aperiam error animi assumenda alias.
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>