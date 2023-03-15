<script setup lang="ts">
import { SidebarItem } from '~~/types/contentful'
defineProps<{ item: SidebarItem }>()
</script>

<template>
  <component
    v-if="item.component"
    :is="item.component"
    v-bind="item.componentProps"
  />

  <v-card v-else class="mb-4">
    <v-img v-if="item?.image?.url" :src="item?.image?.url!"></v-img>

    <v-card-title v-if="item?.title"> {{ item?.title }} </v-card-title>

    <v-card-text v-if="item?.body" v-html="item?.body"> </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions v-if="item?.buttonText && item?.buttonLink">
      <v-btn
        :href="item?.buttonLink!"
        variant="text"
        block
        color="deep-purple-lighten-1"
      >
        {{ item?.buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
