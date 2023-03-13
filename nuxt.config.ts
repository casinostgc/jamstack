// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    //
    '~~/assets/styles.scss',
    // //
    // '@fortawesome/fontawesome-free/css/fontawesome.css',
    // '@fortawesome/fontawesome-free/css/brands.css',
    // '@fortawesome/fontawesome-free/css/solid.css',
  ],

  // css: ['~~/assets/vuetify-custom.scss'],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    //
    '@nuxtjs/algolia',
  ],
})
