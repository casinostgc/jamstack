<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})

const { init } = useSiteSettings()
await init()
</script>

<template>
  <v-app>
    <SiteHeader />

    <NuxtPage :key="$route.fullPath" />

    <SiteFooter />
  </v-app>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>
