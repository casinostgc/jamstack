<template>
  <article>
    <PageHeader :page="page" />

    <Hero v-if="page.show_hero && hero" :hero="hero" />

    <v-container class="my-5">
      <nuxt-content :document="page" />
    </v-container>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const page = await $content('home').fetch()

      let hero
      if (page.show_hero && page.hero) {
        hero = await $content('heroes', page.hero).fetch()
      }

      return { page, hero }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head: {
    title: 'Home',
  },
}
</script>
