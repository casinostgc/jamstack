<template>
  <article>
    <PageHeader :page="page" />

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
      return { page }
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
