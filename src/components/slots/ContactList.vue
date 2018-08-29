<template>
	<div class="contact-list p-4 rounded bg-white max-w-xs shadow-md">
		<h4>Contact List</h4>
		<ul class="list-reset mt-4">
			<li v-for="contact in contacts" :key="contact.id" class="flex flex-col mt-2">
				<slot :contact="contact">
					<span>{{ contact.name }}</span>
					<span class="text-xs text-grey-dark">{{ contact.email }}</span>
				</slot>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["contacts"],
	data () {
		return {
			
		}
	}
}
</script>