<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

const { settings } = useSiteSettings()

const pages = computed(() => settings.navigationCollection?.items)

const isMobile = computed(() => useDisplay().mobile.value)
const drawer = ref(!isMobile.value)
</script>

<template>
  <v-app-bar>
    <a href="/" class="text-decoration-none text-black mx-4">
      <span v-html="settings.siteTitle"></span>
    </a>

    <v-spacer />

    <v-btn
      v-if="settings.companyPhone"
      color="purple"
      variant="elevated"
      rounded
      icon="mdi-phone"
      title="Call Us Today"
      :href="`tel:${settings.companyPhone}`"
      class="mx-2"
    >
    </v-btn>

    <v-app-bar-nav-icon @click="drawer = !drawer" title="Menu" />
  </v-app-bar>

  <ClientOnly>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      :temporary="isMobile"
      theme="dark"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in pages"
          :key="i"
          :href="item?.slug!"
          :prepend-icon="item?.icon ?? undefined"
        >
          <v-list-item-subtitle v-text="item?.navigationTitle ?? item?.title" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </ClientOnly>
</template>
