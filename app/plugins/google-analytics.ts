import { createGtag } from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.env.DEV) return;

  const gtag = createGtag({
    tagId: "G-2MVYJ1F7GN",
    config: {
      send_page_view: true,
    },
  });

  nuxtApp.vueApp.use(gtag);
});
