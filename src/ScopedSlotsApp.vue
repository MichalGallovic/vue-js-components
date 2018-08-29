<template>
	<div id="app" class="container bg-presentation">
		<contact-list :contacts="contacts"></contact-list>

		<contact-list :contacts="contacts" class="mt-4">
			<template slot-scope="{ contact }">
				<span>{{ contact.name }}</span>
			</template>
		</contact-list>

		<contact-list :contacts="contacts" class="mt-4">
			<template slot-scope="{ contact }">
				<span class="text-xs">{{ contact.email }}</span>
			</template>
		</contact-list>
	</div>
</template>

<script>
import ContactList from './components/slots/ContactList.vue'

export default {
	components: {
		ContactList
	},
	data () {
		return {
			contacts: [{
				id: 1,
				name: "John Doe",
				email: "johndoe@gmail.com"
			}, {
				id: 2,
				name: "Douglas Adams",
				email: "douglas@adams.com"
			}, {
				id: 3,
				name: "Michal Polen",
				email: "michal@polen.com"
			}]
		}
	}
}
</script>