<script setup lang="ts">
const { settings } = useSiteSettings();
const sidebarItems = computed(
  () => settings.value?.sidebarCollection?.items ?? []
);
</script>

<template>
  <SidebarItem v-for="item in sidebarItems" :item="item!" />
</template>
