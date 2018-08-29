import Vue from 'vue'
// import App from './NativeControlledComponentsApp.vue'
// import App from './CustomControlledComponentsApp.vue'
import App from './WrappingExternalLibrariesApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
