<script setup lang="ts">
const props = defineProps<{
  myProp?: boolean
}>()
</script>

<template>
  <v-card>
    <pre>{{ props }}</pre>
    <pre>{{ $attrs }}</pre>
  </v-card>
</template>
