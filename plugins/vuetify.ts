import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#261d5c',
    'primary-darken-1': '#3700B3',
    secondary: '#ca1b1d',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

export default defineNuxtPlugin(NuxtApp => {
	const vuetify = createVuetify({
		components,
		directives,
		theme: {
      defaultTheme: 'myCustomLightTheme',
			themes: {
				myCustomLightTheme,
			},
		},
	})
	NuxtApp.vueApp.use(vuetify)
})