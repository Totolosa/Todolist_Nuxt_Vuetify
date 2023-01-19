//import { createApp } from 'vue'
//import App from './App.vue'

// Vuetify
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(NuxtApp => {
	const vuetify = createVuetify({
		components,
		directives,
	})
	NuxtApp.vueApp.use(vuetify)
})


// createApp(App).use(vuetify).mount('#app')