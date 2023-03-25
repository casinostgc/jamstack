<script setup lang="ts">
import { AisPagination } from 'vue-instantsearch/vue3/es/index.js'

const page = ref(1)
</script>

<template>
  <ais-pagination>
    <template v-slot="{ currentRefinement, nbPages, refine }">
      <v-pagination
        v-model="page"
        :length="nbPages"
        @update:modelValue="refine(page - 1)"
        @previous="refine(currentRefinement - 1)"
        @next="refine(currentRefinement + 1)"
        :total-visible="$vuetify.display.xs ? 3 : 6"
        size="small"
      ></v-pagination>
    </template>
  </ais-pagination>
</template>
