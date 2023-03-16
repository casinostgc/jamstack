<script setup lang="ts">
import { Page } from '~~/types/contentful'
import {
  AisConfigure,
  AisSearchBox,
  AisHits,
  AisPagination,
  AisStats,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'

const page = inject<Ref<Page>>('page')

const props = defineProps<{
  cardHeader?: boolean
  cardActions?: boolean
  filters?: string[]
}>()

const configure = ref({
  filters: [
    `_departingat > ${new Date().valueOf()}`,
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
        <template v-for="(item, i) in items">
          <v-divider inset v-if="i !== 0"></v-divider>

          <v-list-item lines="two" :href="item.casinoPath">
            <template #prepend>
              <v-avatar color="pink-lighten-2">
                <v-icon>{{ page?.icon }}</v-icon>
              </v-avatar>
            </template>

            <v-list-item-subtitle class="text-overline">
              {{ new Date(item._departingat).toLocaleDateString() }}
              {{ item.departingairport }}
            </v-list-item-subtitle>

            <v-list-item-title class="text-capitalize">
              {{ (item.casinoName ?? item.gamingresort).toLowerCase() }}
            </v-list-item-title>

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
      <ais-pagination :padding="1"></ais-pagination>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
