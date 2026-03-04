<script setup lang="ts">
import { AisInstantSearch } from "vue-instantsearch/vue3/es/index.js";
import { useGeolocation } from "@vueuse/core";

const { activeIndex, routing } = useAlgoliaIndex("flights");

const { coords, error } = useGeolocation();

const location = computed<string | undefined>(() => {
  if (error.value) return undefined;

  // const latitude = 27.948199;
  // const longitude = -82.454892;

  const latitude = coords.value?.latitude;
  const longitude = coords.value?.longitude;

  if (!Number.isFinite(latitude) || !Number.isFinite(longitude))
    return undefined;

  return `_geoloc(${latitude}, ${longitude}):asc`;
});

const { searchClient, params, instantSearchRef } = useTypesenseInstance();

watchEffect(() => {
  params.value = {
    // https://typesense.org/docs/30.1/api/search.html#filter-parameters
    additionalSearchParameters: {
      query_by: "*",
      sort_by: [
        //
        location.value,
        `_departingat:asc`,
      ]
        .filter(Boolean)
        .join(","),
    },
    geoLocationField: "_geoloc",
  };
});
</script>

<template>
  <ais-instant-search
    :index-name="activeIndex"
    :search-client="searchClient"
    :routing="routing"
    ref="instantSearchRef"
  >
    <NuxtLayout name="page">
      <!-- <NuxtPage /> -->

      <Flights card-header card-actions flat />
      <!-- <template #sidebar>sidebar</template> -->
    </NuxtLayout>
  </ais-instant-search>
</template>
