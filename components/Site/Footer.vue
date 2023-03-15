<script setup lang="ts">
const { settings } = useSiteSettings()
</script>

<template>
  <v-footer class="text-caption" color="grey-lighten-4">
    <v-spacer />
    <span>
      &copy; {{ new Date().getFullYear() }} {{ settings.companyName }}
    </span>
    <v-spacer />
  </v-footer>
</template>
