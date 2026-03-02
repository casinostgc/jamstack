<script setup lang="ts">
import { AisInstantSearch } from "vue-instantsearch/vue3/es/index.js";

const { activeIndex, routing } = useAlgoliaIndex("cruises");

const { searchClient } = useSearchClient({
  // https://typesense.org/docs/30.1/api/search.html#filter-parameters
  additionalSearchParameters: {
    query_by: "*",
    sort_by: [`_embarkation_date:asc`].filter(Boolean).join(","),
  },
});
</script>

<template>
  <ais-instant-search
    :index-name="activeIndex"
    :search-client="searchClient"
    :routing="routing"
  >
    <NuxtLayout name="page">
      <!-- <NuxtPage /> -->
      <Cruises card-header card-actions flat />
      <!-- <template #sidebar>sidebar</template> -->
    </NuxtLayout>
  </ais-instant-search>
</template>
