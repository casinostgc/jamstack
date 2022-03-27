

<template>
  <main>
    <PageHeader :page="page"> </PageHeader>

    <v-container class="my-5">
      <Breadcrumbs :crumbs="[{ text: 'Flights' }]" />

      <SiteSidebarSlot>
        <!-- <NuxtChild /> -->
        <nuxt-content :document="page" />

        <v-card v-if="true">
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
      const flights = await $content('flights').fetch()

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

  data: () => ({
    search: '',
  }),

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
