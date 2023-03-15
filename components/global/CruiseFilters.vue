<script setup lang="ts">
import {
  AisRefinementList,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'
</script>

<template>
  <v-card flat class="mb-4">
    <v-card-title> Embarkation Port </v-card-title>
    <v-card-text>
      <ais-refinement-list
        attribute="departure_port"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-card-text>
  </v-card>

  <v-card flat class="mb-4">
    <v-card-title> Cruise Line </v-card-title>
    <v-card-text>
      <ais-refinement-list
        attribute="cruise_line"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-card-text>
  </v-card>

  <v-card flat class="mb-4">
    <v-card-title> Cruise Ship </v-card-title>
    <v-card-text>
      <ais-refinement-list
        attribute="ship"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-card-text>
  </v-card>
</template>
