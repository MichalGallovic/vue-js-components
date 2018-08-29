<template>
	<div id="app" class="container bg-presentation">
		<fetch-json url="fixtures/contacts.json">
			<div slot-scope="{ response }">
				<ul>
					<li v-for="contact in response" :key="contact.id">{{ contact.name }}</li>
				</ul>
			</div>
		</fetch-json>

		<fetch-json url="fixtures/contacts.json">
			<div slot-scope="{ loading, response: contacts }">
				<span v-if="loading">Contacts loading, please wait ...</span>
				<contact-list v-else :contacts="contacts" class="mt-4"></contact-list>
			</div>
		</fetch-json>
	</div>
</template>

<script>
import ContactList from './components/slots/ContactList.vue'
import FetchJson from './components/renderless/FetchJson.vue'

export default {
	components: {
		ContactList,
		FetchJson
	}
}
</script>