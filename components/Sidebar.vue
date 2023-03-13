<script setup lang="ts">
const { settings } = useSiteSettings()
const sidebarItems = computed(() => settings.sidebarCollection?.items ?? [])
</script>

<template>
  <v-card v-for="item in sidebarItems" class="mb-4">
    <v-img v-if="item?.image?.url" :src="item?.image?.url"></v-img>

    <v-card-title v-if="item?.title"> {{ item?.title }} </v-card-title>

    <v-card-text v-if="item?.body" v-html="item?.body"> </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        v-if="item?.buttonText && item?.buttonLink"
        :href="item?.buttonLink"
        variant="text"
        block
        color="deep-purple-lighten-1"
      >
        {{ item?.buttonText }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
