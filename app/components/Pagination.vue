<script setup lang="ts">
const props = defineProps<{
  base: string
  total: number
  limit: number
}>()

const route = useRoute()

const pages = computed(() => Math.ceil(props.total! / props.limit))

const currentPage = computed<number>(() =>
  parseInt(route.query.page?.toString() ?? '1')
)

const navigate = (page: number) => {
  return navigateTo(`/${props.base}?page=${page}`)
}
</script>

<template>
  <v-pagination
    v-if="pages > 1"
    :model-value="currentPage"
    :length="pages"
    :total-visible="5"
    @update:modelValue="navigate"
    size="small"
  ></v-pagination>
</template>
