// import 'vuetify/styles' // Global CSS has to be imported
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme: ThemeDefinition = {
  dark: false,

  colors: {
    // primary: '#054173',
    // secondary: '#1d93bf',
    // accent: '#F36A58',
    // dark: '#424242',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',

    themes: {
      lightTheme,
    },
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vuetify)
})
