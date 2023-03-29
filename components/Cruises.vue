<script setup lang="ts">
import { Page } from '~~/types/contentful'
import {
  AisConfigure,
  AisSearchBox,
  AisHits,
  AisStats,
} from 'vue-instantsearch/vue3/es/index.js'
import { DateTime } from 'luxon'

const page = inject<Ref<Page>>('page')

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
        <v-col cols="12">
          <ais-search-box>
            <template v-slot="{ currentRefinement, isSearchStalled, refine }">
              <v-text-field
                xtype="search"
                placeholder="Search Cruises"
                :value="currentRefinement"
                @update:model-value="refine($event)"
                hide-details
                variant="solo"
                clearable
                :loading="isSearchStalled"
              />
            </template>
          </ais-search-box>
        </v-col>
        <v-col cols="12" class="text-right text-caption">
          <ais-stats />
        </v-col>
      </v-row>
    </v-card-text>

    <ais-hits>
      <template v-slot="{ items, sendEvent }">
        <template v-for="(item, i) in items">
          <v-divider inset v-if="i !== 0"></v-divider>

          <v-list-item lines="three">
            <template #prepend>
              <v-avatar color="blue-lighten-1">
                <v-icon>{{ page?.icon }}</v-icon>
              </v-avatar>
            </template>

            <v-list-item-subtitle class="text-overline">
              {{
                DateTime.fromISO(item.embarkation_date)
                  .toJSDate()
                  .toLocaleDateString()
              }}
              {{ item.departure_port }}
            </v-list-item-subtitle>

            <v-list-item-title class="text-capitalize">
              {{ item.description.toLowerCase() }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-capitalize">
              {{ item.cruise_line.toLowerCase() }} -
              {{ item.ship.toLowerCase() }}
            </v-list-item-subtitle>

            <template #append v-if="$zoho">
              <ZohoLeadsForm
                @click="sendEvent('click', item, 'Interested')"
                button-size="small"
                :interest="JSON.stringify(item)"
              />
            </template>
          </v-list-item>
        </template>
      </template>
    </ais-hits>

    <v-card-actions v-if="cardActions">
      <v-spacer></v-spacer>
      <SearchPagination />
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
