<script setup lang="ts">
import {
  AisRefinementList,
  AisHighlight,
  // @ts-ignore
} from 'vue-instantsearch/vue3/es/index.js'

const props = withDefaults(
  defineProps<{
    label: string
    attribute: string
    placeholder?: string
    limit?: number
    searchable?: boolean
    showMore?: boolean
    showMoreLimit?: number
    divider?: boolean
  }>(),
  {
    limit: 5,
    showMoreLimit: 100,
  }
)
</script>

<template>
  <ais-refinement-list
    :attribute="attribute"
    :limit="limit"
    :show-more="showMore"
    :show-more-limit="showMoreLimit"
    :searchable="searchable"
    class="mb-8"
  >
    <template
      v-slot="{
        items,
        isShowingMore,
        isFromSearch,
        canToggleShowMore,
        refine,
        createURL,
        toggleShowMore,
        searchForItems,
        sendEvent,
      }"
    >
      <v-text-field
        v-if="searchable"
        hide-details
        :placeholder="placeholder ?? `Search by ${label}`"
        density="compact"
        xvariant="underlined"
        @update:model-value="searchForItems($event)"
      ></v-text-field>

      <v-list density="compact" class="text-body-2">
        <v-list-item v-if="isFromSearch && !items.length">
          No results.
        </v-list-item>

        <!--  -->
        <v-list-item
          v-for="item in items"
          :key="item.value"
          :href="createURL(item)"
          @click.prevent="refine(item.value)"
          :prepend-icon="
            item.isRefined
              ? 'mdi-checkbox-marked-outline'
              : 'mdi-checkbox-blank-outline'
          "
        >
          <ais-highlight attribute="item" :hit="item" />
          <template v-slot:append>
            <v-chip size="x-small">
              {{ item.count.toLocaleString() }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>

      <v-btn
        @click="toggleShowMore"
        :disabled="!canToggleShowMore"
        size="small"
        variant="outlined"
        color="grey"
      >
        {{ !isShowingMore ? 'Show more' : 'Show less' }}
      </v-btn>
    </template>
  </ais-refinement-list>
</template>
