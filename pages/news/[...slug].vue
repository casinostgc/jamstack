<script setup lang="ts">
import { NewsArticle } from '~~/types/contentful'

const { path } = useRoute()
const { data: article } = await useFetch<NewsArticle>(
  `/api/articles/find?slug=${path}`
)

useBreadcrumbs([
  {
    title: 'News',
    href: '/news',
  },
  {
    title: article.value?.title!,
    disabled: true,
  },
])
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

    <div class="rte" v-html="useMarkdown(article?.body! ?? undefined) "></div>

    <v-divider class="mb-8"></v-divider>

    <div class="text-caption">
      Posted

      <time>
        {{ new Date(article?.sys.firstPublishedAt).toLocaleString() }}
      </time>
    </div>
  </article>
</template>
