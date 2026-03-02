const {
  TYPESENSE_PROTOCOL,
  TYPESENSE_PORT,
  TYPESENSE_HOST,
  TYPESENSE_API_READ_KEY,
} = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    //
    "~~/assets/styles.scss",
  ],

  build: {
    transpile: [
      //
      "vuetify",
      "typesense-instantsearch-adapter",
    ],
  },

  generate: {
    routes: ["/_redirects"],
  },

  modules: [
    //
  ],

  runtimeConfig: {
    public: {
      typesense: {
        apiKey: TYPESENSE_API_READ_KEY,
        host: TYPESENSE_HOST,
        port: TYPESENSE_PORT,
        protocol: TYPESENSE_PROTOCOL,
      },
    },
  },
});
