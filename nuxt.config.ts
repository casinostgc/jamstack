const {
  TYPESENSE_PROTOCOL,
  TYPESENSE_PORT,
  TYPESENSE_HOST,
  TYPESENSE_API_READ_KEY,
} = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-02",

  css: [
    //
    "~/assets/styles.scss",
  ],

  build: {
    transpile: [
      //
      "vuetify",
      ({ isDev }) => {
        return !isDev ? "typesense-instantsearch-adapter" : false;
      },
    ],
  },

  nitro: {
    prerender: {
      routes: ["/_redirects"],
    },
  },

  modules: [
    //
  ],

  runtimeConfig: {
    public: {
      typesense: {
        apiKey: TYPESENSE_API_READ_KEY, // Be sure to use the search-only-api-key
        host: TYPESENSE_HOST,
        port: TYPESENSE_PORT,
        protocol: TYPESENSE_PROTOCOL,
      },
    },
  },
});
