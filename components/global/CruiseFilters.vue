<script setup lang="ts">
import {
  AisRefinementList,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'
</script>

<template>
  <v-list class="mb-4">
    <v-list-subheader class="font-weight-bold mt-4 text-body-1 text-black">
      Embarkation Port
    </v-list-subheader>

    <v-list-item>
      <ais-refinement-list
        attribute="departure_port"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-list-item>

    <v-divider inset class="my-4"></v-divider>

    <v-list-subheader class="font-weight-bold mt-4 text-body-1 text-black">
      Cruise Line
    </v-list-subheader>

    <v-list-item>
      <ais-refinement-list
        attribute="cruise_line"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-list-item>

    <v-divider inset class="my-4"></v-divider>

    <v-list-subheader class="font-weight-bold mt-4 text-body-1 text-black">
      Cruise Ship
    </v-list-subheader>

    <v-list-item>
      <ais-refinement-list
        attribute="ship"
        :limit="7"
        show-more
        :show-more-limit="100"
        searchable
      />
    </v-list-item>
  </v-list>
</template>
