<template>
  <article>
    <Breadcrumbs :crumbs="[{ text: 'Casinos' }]" />

    <SiteSidebarSlot>
      <nuxt-content :document="page" />

      <v-card class="mt-5">
        <v-list>
          <template v-for="(casino, i) in casinos">
            <v-divider v-if="i !== 0" inset :key="`divider-${i}`"></v-divider>

            <v-list-item
              :key="i"
              :to="`/casinos/${casino.slug}`"
              exact
              router
              two-line
            >
              <v-list-item-avatar color="teal">
                <v-icon dark> mdi-poker-chip </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="casino.title" />

                <v-list-item-subtitle
                  v-if="
                    casino.destination && destinationBySlug(casino.destination)
                  "
                >
                  {{ destinationBySlug(casino.destination).title }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-icon v-if="casino.code && flightsByCode(casino.code).length">
                mdi-airplane
              </v-icon>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </SiteSidebarSlot>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('casinos_index').fetch()

      const casinos = await $content('casinos')
        .without(['body'])
        .sortBy('title')
        .fetch()

      const destinations = await $content('destinations')
        .only(['title', 'slug'])
        .fetch()
        .catch()

      const flights = await $content('flights')
        .only('casinoCode')
        .fetch()
        .catch()

      return { page, casinos, destinations, flights }
    } catch (e) {
      error({ message: e.message })
    }
  },

  methods: {
    destinationBySlug(slug) {
      return this.destinations.find((d) => d.slug === slug) || null
    },

    flightsByCode(code) {
      return this.flights.filter((f) => f.casinoCode === code) || []
    },
  },
}
</script>
