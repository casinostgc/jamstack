<script setup lang="ts">
const { settings } = useSiteSettings()

const pages = computed(() => settings.navigationCollection?.items)

const drawer = ref(false)
</script>

<template>
  <header>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in pages"
          :key="i"
          :href="item?.slug!"
          router
          exact
          dense
          :prepend-icon="item?.icon ?? undefined"
          class="text-black"
        >
          <v-list-item-subtitle v-text="item?.navigationTitle ?? item?.title" />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
  </header>
</template>
