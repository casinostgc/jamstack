<script setup lang="ts">
import {
  AisInstantSearch,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'

const { activeIndex, routing } = useAlgoliaIndex('Cruises')
const algolia = useAlgoliaRef()
</script>

<template>
  <ais-instant-search
    :index-name="activeIndex"
    :search-client="algolia"
    :routing="routing"
  >
    <NuxtLayout name="page">
      <!-- <NuxtPage /> -->
      <Cruises card-header card-actions flat />
      <!-- <template #sidebar>sidebar</template> -->
    </NuxtLayout>
  </ais-instant-search>
</template>
