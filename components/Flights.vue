<script setup lang="ts">
import {
  AisInstantSearch,
  AisConfigure,
  AisSearchBox,
  AisHits,
  AisPagination,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es'

const props = defineProps<{
  cardHeader?: boolean
  cardActions?: boolean
  filters?: string[]
}>()

// const { result, search } = useAlgoliaSearch('Flights')

const indexName = 'Flights'
const algolia = useAlgoliaRef()
const configure = ref({
  filters: [
    `_departingat > ${new Date().valueOf()}`,
    ...(props.filters ?? []),
  ].join(' AND '),
})
</script>

<template>
  <!-- <Link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/instantsearch.css@8.0.0/themes/reset-min.css"
    integrity="sha256-2AeJLzExpZvqLUxMfcs+4DWcMwNfpnjUeAAvEtPr0wU="
    crossorigin="anonymous"
  /> -->

  <Link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/instantsearch.css@8.0.0/themes/satellite-min.css"
    integrity="sha256-p/rGN4RGy6EDumyxF9t7LKxWGg6/MZfGhJM/asKkqvA="
    crossorigin="anonymous"
  />

  <ais-instant-search :index-name="indexName" :search-client="algolia">
    <ais-configure v-bind="configure" />
    <v-card>
      <v-card-text v-if="cardHeader">
        <v-row justify="space-between" align="center">
          <v-col>
            <h4>Flights</h4>
          </v-col>
          <v-col>
            <ais-search-box />
          </v-col>
        </v-row>
      </v-card-text>

      <ais-hits>
        <template v-slot="{ items, sendEvent }">
          <v-table>
            <thead>
              <tr>
                <th colspan="2">Departs From</th>

                <th>Arrive At</th>
                <th>Return</th>
              </tr>
            </thead>
            <tbody class="text-caption">
              <tr v-for="item in items" :key="item.objectID">
                <td>
                  {{ item.departingairport }}
                </td>
                <td>
                  {{ item.departingat }}
                </td>
                <td>
                  <a :href="item.casinoPath">
                    {{ item.gamingresort }}
                  </a>
                </td>
                <td>
                  {{ item.arrivingat }}
                </td>
              </tr>
            </tbody>
          </v-table>
        </template>
      </ais-hits>

      <v-card-actions v-if="cardActions">
        <v-spacer></v-spacer>
        <ais-pagination :padding="1"></ais-pagination>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </ais-instant-search>
</template>
