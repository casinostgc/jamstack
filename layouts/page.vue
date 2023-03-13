<script setup lang="ts">
import { Page } from '~~/types/contentful'

const { path, matched } = useRoute()
const matchedPath = matched?.[0]?.path

const url = computed(
  () =>
    `/api/pages/find?slug=${matchedPath !== '/:slug(.*)*' ? matchedPath : path}`
)

const { data: page } = await useAsyncData<Page>(url.value, () =>
  $fetch(url.value)
)

provide('page', page)

useHead({
  title: page.value?.title ?? 'Casinos The Grand Collection',
})

const headerImage = computed(
  () =>
    page.value?.headerImage?.url ??
    'https://images.ctfassets.net/akm0kyo1pd0w/6NIjfeBtFFSpqwqAQ1iER2/bd3c30904bc549205c49ffa5f70948f9/bimini_destination.jpeg'
)

const { breadcrumbs } = useBreadcrumbs([
  {
    title: page.value?.title!,
  },
])
</script>

<template>
  <v-main>
    <v-img
      :aspect-ratio="-1"
      :src="headerImage"
      gradient="45deg, rgba(25, 32, 72, 0.7), rgba(211, 136, 22, 0.7)"
      cover
    >
      <v-container class="text-center text-white my-8 my-sm-16">
        <Logo v-if="path === '/'" :style="{ maxWidth: '600px' }" />

        <template v-else>
          <h1 class="font-weight-regular text-h3">
            {{ page?.title }}
          </h1>
          <p class="font-weight-light text-h6 text-muted">
            {{ page?.subtitle }}
          </p>
        </template>
      </v-container>
    </v-img>

    <v-container class="my-8">
      <small v-if="$route.path !== '/'">
        <v-breadcrumbs :items="breadcrumbs" color="deep-purple-lighten-1" />
      </small>

      <v-row>
        <v-col cols="12" sm="7" md="8">
          <div
            class="rte"
            v-html="useMarkdown(page?.body! ?? undefined) "
          ></div>

          <!--  -->
          <slot></slot>
        </v-col>

        <v-col cols="12" sm="5" md="4">
          <slot name="sidebar"></slot>

          <Sidebar />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
