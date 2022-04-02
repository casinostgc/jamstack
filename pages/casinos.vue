<template>
  <main>
    <PageHeader :page="page"> </PageHeader>

    <v-container class="my-5">
      <!-- <SiteSidebarSlot> -->
      <NuxtChild />
      <!-- </SiteSidebarSlot> -->
    </v-container>
  </main>
</template>

<script>
export default {
  name: 'News',

  async asyncData({ $content, error }) {
    try {
      const page = await $content('casinos_index').fetch()
      return { page }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head: {
    title: 'Casinos',
  },
}
</script>
