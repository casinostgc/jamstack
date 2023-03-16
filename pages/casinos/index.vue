<script setup lang="ts">
import { Casino, Page } from '~~/types/contentful'

const page = inject<Ref<Page>>('page')

const route = useRoute()

const { data } = await useFetch<{
  total: number
  items: Casino[]
}>(`/api/casinos?page=${route.query.page}`)

if (!data) {
  throw createError({
    //
  })
}

const casinos = computed(() => data.value?.items ?? [])

useBreadcrumbs([
  {
    title: page?.value?.navigationTitle ?? page?.value?.title!,
    href: page?.value.slug!,
    disabled: true,
  },
])
</script>

<template>
  <section v-if="casinos?.length" id="articles">
    <v-list lines="two">
      <template v-for="casino in casinos">
        <v-list-item :href="casino.slug!">
          <template #prepend>
            <v-avatar color="teal-lighten-1">
              <v-icon>{{ page?.icon }}</v-icon>
            </v-avatar>
          </template>

          <v-list-item-title>
            {{ casino.title }}
          </v-list-item-title>

          <v-list-item-subtitle class="text-caption">
            {{ casino.destination?.title }}
          </v-list-item-subtitle>
        </v-list-item>

        <v-divider inset></v-divider>
      </template>
    </v-list>
  </section>

  <section v-else :style="{ textAlign: 'center' }">No Casinos</section>

  <Pagination :total="data?.total!" :limit="20" base="casinos" />
</template>
