<script setup lang="ts">
import { NewsArticle, Page } from '~~/types/contentful'

const page = inject<Ref<Page>>('page')

const { path } = useRoute()
const { data: article } = await useFetch<NewsArticle>(
  `/api/articles/find?slug=${path}`
)

useBreadcrumbs([
  {
    title: page?.value?.navigationTitle ?? page?.value?.title!,
    href: page?.value.slug!,
  },
  {
    title: article.value?.title!,
    disabled: true,
  },
])

// useSidebar(
//   article.value?.sidebarCollection?.items.map((i) => i!),
//   article.value?.sidebarReplace!,
//   article.value?.sidebarAppend!
// )
</script>

<template>
  <article>
    <h2 class="text-h4">
      {{ article?.title }}
    </h2>

    <p class="font-weight-thin text-h6">
      {{ article?.subtitle }}
    </p>

    <v-divider class="mb-8"></v-divider>

    <Rte :markdown="article?.body!" />

    <v-divider class="mb-8"></v-divider>

    <div class="text-caption">
      Posted

      <time>
        {{ new Date(article?.sys.firstPublishedAt).toLocaleString() }}
      </time>
    </div>
  </article>
</template>
