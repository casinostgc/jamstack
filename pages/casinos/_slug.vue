<template>
  <article>
    <Breadcrumbs
      :crumbs="[{ text: 'Casinos', to: '/casinos' }, { text: casino.title }]"
    />

    <SiteSidebarSlot>
      <ArticleHeader :post="casino" />

      <nuxt-content :document="casino" />

      <!-- <pre>{{ similarCasinos }}</pre> -->
      <div v-if="similarCasinos.length">
        <h3 class="text-h5 my-3">
          Other Gaming Locations in {{ destination.title }}
        </h3>

        <v-btn
          v-for="casino in similarCasinos"
          :key="casino.id"
          small
          outlined
          color="teal"
          class="mr-2 mb-2"
          :to="`/casinos/${casino.slug}`"
        >
          {{ casino.title }}
        </v-btn>
      </div>

      <!-- <pre>{{ flights }}</pre> -->
      <v-btn
        slot="presidebar"
        v-if="flights.length"
        :to="{ name: 'flights', query: { q: casino.code } }"
        color="teal"
        class="mb-5 white--text"
        large
        block
        rounded
      >
        {{ flights.length }} Flights Available
        <v-icon right dark> mdi-airplane </v-icon>
      </v-btn>
    </SiteSidebarSlot>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const casino = await $content('casinos', params.slug).fetch()

      const similarCasinos = await $content('casinos')
        .where({ slug: { $ne: casino.slug }, destination: casino.destination })
        .fetch()
        .catch()

      const destination = await $content('destinations', casino.destination)
        .fetch()
        .catch()

      const flights = await $content('flights')
        .where({ casinoCode: casino.code })
        .fetch()
        .catch((err) => {
          console.warn('unable to load flights')
        })

      return { casino, similarCasinos, destination, flights }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head() {
    return {
      title: this.casino.title,
    }
  },
}
</script>
