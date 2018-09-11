import Vue from 'vue'
import PortalVue from 'portal-vue'
// import App from './NativeControlledComponentsApp.vue'
// import App from './CustomControlledComponentsApp.vue'
// import App from './WrappingExternalLibrariesApp.vue'
// import App from './SlotsApp.vue'
// import App from './ScopedSlotsApp.vue'
// import App from './RenderFunctionApp.vue'
// import App from './FetchJsonContactListApp.vue'
// import App from './RenderlessTagsInputApp.vue'
// import App from './ReusableComponentsApp.vue'
import App from './PortalsApp.vue'

Vue.config.productionTip = false
Vue.use(PortalVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
