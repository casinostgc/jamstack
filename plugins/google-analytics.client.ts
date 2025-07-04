import VueGtag, { type PageView } from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.env.DEV) return;

  const route = useRoute();

  nuxtApp.vueApp.use(VueGtag, {
    config: { id: "G-2MVYJ1F7GN" },
    pageTrackerEnabled: true,
    pageTrackerScreenviewEnabled: true,
    pageTrackerTemplate: () => {
      const pageView: PageView = {
        page_title: route.path,
        page_path: route.fullPath,
      };
      return pageView;
    },
  });
});
