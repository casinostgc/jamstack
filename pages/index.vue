<template>
  <article>
    <PageHeader :page="page" class="text-center">
      <Logo style="max-width: 600px;" alt="Casinos The Grand Collection, LLC" />
    </PageHeader>

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
      return { page }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head: {
    title: 'Home',
  },
}
</script>