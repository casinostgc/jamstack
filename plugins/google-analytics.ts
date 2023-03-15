import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.env.DEV) return

  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: { id: 'G-2MVYJ1F7GN' },
      // @ts-ignore
      pageTrackerTemplate: (to: RouteLocationNormalized) => ({
        page_title: to.path,
        page_path: to.fullPath,
      }),
    },
    nuxtApp.$router
  )
})
