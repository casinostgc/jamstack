<script setup lang="ts">
import {
  AisRefinementList,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'
</script>

<template>
  <v-list class="mb-4">
    <v-list-subheader class="font-weight-bold mt-4 text-body-1 text-black">
      Resort
    </v-list-subheader>

    <v-list-item>
      <ais-refinement-list
        attribute="casinoName"
        :limit="5"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-list-item>

    <v-divider inset class="my-4"></v-divider>

    <v-list-subheader class="font-weight-bold mt-4 text-body-1 text-black">
      Departing Airport
    </v-list-subheader>

    <v-list-item>
      <ais-refinement-list
        attribute="departingairport"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-list-item>
  </v-list>
</template>
