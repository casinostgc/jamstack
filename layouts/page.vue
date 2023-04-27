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
    title: page?.value?.navigationTitle ?? page?.value?.title!,
  },
])

const { sidebarItems, sidebarReplace, sidebarAppend } = useSidebar(
  page.value?.sidebarCollection?.items.map((i) => i!),
  page.value?.sidebarReplace!,
  page.value?.sidebarAppend!
)

const useFullSizeHeader = computed(
  () => !page.value?.overlayLogo && !!page.value?.hideTitle
)
</script>

<template>
  <NuxtLayout name="default">
    <v-main>
      <v-img
        :aspect-ratio="!useFullSizeHeader ? -1 : undefined"
        :src="headerImage"
        :gradient="
          !page.disableGradient
            ? `45deg, rgba(25, 32, 72, 0.7), rgba(211, 136, 22, 0.7)`
            : undefined
        "
        cover
      >
        <v-container class="text-center text-white my-8 my-sm-16">
          <Logo v-if="page.overlayLogo" :style="{ maxWidth: '600px' }" />

          <template v-else-if="!page.hideTitle">
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
            <Rte :markdown="page?.body!" />

            <!--  -->
            <slot></slot>
          </v-col>

          <v-col cols="12" sm="5" md="4">
            <slot name="sidebar">
              <SidebarItem
                v-if="sidebarAppend"
                v-for="item in sidebarItems"
                :item="item"
              />

              <Sidebar v-if="!sidebarReplace" />

              <SidebarItem
                v-if="!sidebarAppend"
                v-for="item in sidebarItems"
                :item="item"
              />
            </slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </NuxtLayout>
</template>
