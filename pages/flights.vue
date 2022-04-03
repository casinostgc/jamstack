<template>
  <main>
    <PageHeader :page="page"> </PageHeader>

    <v-container class="my-5">
      <Breadcrumbs :crumbs="[{ text: 'Flights' }]" />

      <SiteSidebarSlot>
        <!-- <NuxtChild /> -->
        <nuxt-content :document="page" />

        <div
          v-if="!flights.length"
          class="text-center text-h4 font-weight-thin my-10"
        >
          No flights available at this time
        </div>

        <v-card v-else>
          <v-card-title>
            Flights
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="flights"
            :search="search"
          ></v-data-table>
        </v-card>
      </SiteSidebarSlot>

      <!-- <pre>{{ page }}</pre> -->
      <!-- <pre>{{ flights_csv }}</pre> -->
    </v-container>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    try {
      const page = await $content('flights_index').fetch()

      const flights = await $content('flights')
        .fetch()
        .catch(() => [])

      return {
        page,
        flights,
      }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head: {
    title: 'Flights',
  },

  data: function () {
    return {
      search: this.$route.query.q || '',
    }
  },

  computed: {
    headers() {
      const keys = Object.keys(this.flights[0]).filter(
        (k) =>
          ![
            'path',
            'extension',
            'slug',
            'dir',
            'createdAt',
            'updatedAt',
          ].includes(k)
      )

      return keys.map((x) => ({
        text: x,
        value: x,
      }))
    },
  },
}
</script>
