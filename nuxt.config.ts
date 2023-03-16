// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    //
    '~~/assets/styles.scss',
  ],

  build: {
    transpile: ['vuetify'],
  },

  generate: {
    routes: ['/_redirects'],
  },

  modules: [
    //
    '@nuxtjs/algolia',
  ],
})
