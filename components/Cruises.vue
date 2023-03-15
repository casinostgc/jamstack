<script setup lang="ts">
import {
  AisConfigure,
  AisSearchBox,
  AisHits,
  AisPagination,
  AisStats,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'

const props = defineProps<{
  cardHeader?: boolean
  cardActions?: boolean
  filters?: string[]
}>()

const configure = ref({
  filters: [
    `_embarkation_date > ${new Date().valueOf()}`,
    ...(props.filters ?? []),
  ].join(' AND '),
})
</script>

<template>
  <v-card>
    <ais-configure v-bind="configure" />

    <v-card-text v-if="cardHeader">
      <v-row justify="space-between" align="end">
        <v-col>
          <ais-search-box />
        </v-col>
        <v-col class="text-right text-caption">
          <ais-stats />
        </v-col>
      </v-row>
    </v-card-text>

    <ais-hits>
      <template v-slot="{ items, sendEvent }">
        <v-table>
          <thead>
            <tr>
              <th>Description</th>
              <th colspan="2">Departs From</th>
              <th v-if="$zoho"></th>
            </tr>
          </thead>
          <tbody class="text-body-2 text-capitalize">
            <tr v-for="item in items" :key="item.objectID">
              <td>
                {{ item.description.toLowerCase() }}
              </td>
              <td>
                {{ item.departure_port.toLowerCase() }}
              </td>
              <td>
                {{ new Date(item._embarkation_date).toLocaleDateString() }}
              </td>

              <td v-if="$zoho">
                <ZohoLeadsForm
                  @click="sendEvent('click', item, 'Interested')"
                  button-size="x-small"
                  :interest="JSON.stringify(item)"
                />
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
</template>
