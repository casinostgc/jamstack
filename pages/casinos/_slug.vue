<template>
  <article>
    <Breadcrumbs
      :crumbs="[{ text: 'Casinos', to: '/casinos' }, { text: casino.title }]"
    />

    <ArticleHeader :post="casino" />

    <nuxt-content :document="casino" />

    <div v-if="flights.length" class="text-center">
      <v-btn
        :to="{ name: 'flights', query: { q: casino.code } }"
        color="teal"
        class="ma-2 white--text"
        large
      >
        {{ flights.length }} Flights Available
        <v-icon right dark> mdi-airplane </v-icon>
      </v-btn>
    </div>

    <!-- <pre>{{ flights }}</pre> -->
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const casino = await $content('casinos', params.slug).fetch()
      const flights = await $content('flights')
        .where({ casinoCode: casino.code })
        .fetch()
        .catch((err) => {
          console.warn('unable to load flights')
        })

      return { casino, flights }
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
