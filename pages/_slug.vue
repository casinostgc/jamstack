<template>
  <article>
    <PageHeader :page="page" />

    <Hero v-if="page.show_hero && hero" :hero="hero" />

    <v-container class="my-5">
      <Breadcrumbs :crumbs="[{ text: page.title }]" />

      <SiteSidebarSlot>
        <nuxt-content :document="page" />
      </SiteSidebarSlot>

      <!-- <pre>{{ page }}</pre> -->
    </v-container>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('pages', params.slug).fetch()

      let hero
      if (page.show_hero && page.hero) {
        hero = await $content('heroes', page.hero).fetch()
      }

      return { page, hero }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
