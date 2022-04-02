<template>
  <article>
    <Breadcrumbs :crumbs="[{ text: 'Casinos' }]" />

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

              <v-list-item-subtitle>
                <InlineDestination
                  v-if="casino.destination"
                  :slug="casino.destination"
                />
              </v-list-item-subtitle>
            </v-list-item-content>
            <InlineFlights v-if="casino.code" :code="casino.code">
              <v-icon> mdi-airplane </v-icon>
            </InlineFlights>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </article>
</template>

<script>
const InlineDestination = {
  render: function (h) {
    return h('span', this.destination ? this.destination.title : null)
  },

  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  async fetch() {
    try {
      this.destination = await this.$content('destinations', this.slug).fetch()
    } catch (error) {}
  },

  data: () => ({
    destination: null,
  }),
}

const InlineFlights = {
  render: function (h) {
    return h('span', this.flights.length ? this.$slots.default : null)
  },

  props: {
    code: {
      type: String,
      required: true,
    },
  },

  async fetch() {
    try {
      this.flights = await this.$content('flights')
        .where({ casinoCode: this.code })
        .fetch()
        .catch((err) => {
          console.warn('unable to load flights')
        })
    } catch (error) {}
  },

  data: () => ({
    flights: [],
  }),
}

export default {
  components: { InlineDestination, InlineFlights },

  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('casinos_index').fetch()
      const casinos = await $content('casinos')
        .without(['body'])
        .sortBy('title')
        .fetch()

      return { page, casinos }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head: {
    title: 'Casinso',
  },
}
</script>
