<script setup lang="ts">
import {
  AisRefinementList,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'
</script>

<template>
  <v-card flat class="mb-4">
    <v-card-title> Resort </v-card-title>
    <v-card-text>
      <ais-refinement-list
        attribute="casinoName"
        :limit="5"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-card-text>
  </v-card>

  <v-card flat class="mb-4">
    <v-card-title> Departing Airport </v-card-title>
    <v-card-text>
      <ais-refinement-list
        attribute="departingairport"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-card-text>
  </v-card>
</template>
