<script setup lang="ts">
import { NewsArticle, Page } from '~~/types/contentful'

const page = inject<Ref<Page>>('page')

const route = useRoute()

const { data } = await useFetch<{
  total: number
  items: NewsArticle[]
}>(`/api/articles?page=${route.query.page}`)

if (!data) {
  throw createError({
    //
  })
}

const articles = computed(() => data.value?.items ?? [])

useBreadcrumbs([
  {
    title: 'News',
    href: '/news',
    disabled: true,
  },
])
</script>

<template>
  <article>
    <section v-if="articles?.length" id="articles">
      <v-list lines="two">
        <template v-for="article in articles">
          <v-list-item :href="article.slug!">
            <template #prepend>
              <v-avatar color="deep-purple-lighten-1">
                <v-icon>{{ page?.icon }}</v-icon>
              </v-avatar>
            </template>

            <v-list-item-title>
              {{ article.title }}
            </v-list-item-title>

            <v-list-item-subtitle>
              {{ article.subtitle }}
            </v-list-item-subtitle>

            <v-list-item-subtitle class="text-caption">
              {{ new Date(article.sys.firstPublishedAt).toLocaleString() }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-divider inset></v-divider>
        </template>
      </v-list>
    </section>

    <section v-else :style="{ textAlign: 'center' }">No Articles</section>

    <Pagination :total="data?.total!" :limit="10" base="news" />
  </article>
</template>
