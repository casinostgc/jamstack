<template>
  <v-app>
    <SiteHeader />

    <v-main>
      <Nuxt />
    </v-main>

    <SiteFooter />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
.nuxt-content img {
  max-width: 100%;
  margin: 1em auto;
}
</style>