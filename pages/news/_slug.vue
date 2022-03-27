<template>
  <article>
    <Breadcrumbs
      :crumbs="[{ text: 'News', to: '/news' }, { text: post.title }]"
    />

    <ArticleHeader :post="post" />

    <nuxt-content :document="post" />
  </article>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
export default {
  components: { Breadcrumbs },
  async asyncData({ $content, params, error }) {
    try {
      const post = await $content('posts', params.slug)
        // .surround(params.slug)
        .fetch()
      return { post }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>
