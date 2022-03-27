<template>
  <article>
    <Breadcrumbs :crumbs="[{ text: 'News' }]" />

    <nuxt-content :document="page" />

    <v-card>
      <v-list>
        <v-list-item
          v-for="(post, i) in posts"
          :key="i"
          :to="`/news/${post.slug}`"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="post.title" />
            <v-list-item-subtitle
              v-text="new Date(post.createdAt).toLocaleString()"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </article>
</template>

<script>
export default {
  name: 'News',

  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('news').fetch()
      const posts = await $content('posts').without(['body']).fetch()
      return { page, posts }
    } catch (e) {
      error({ message: e.message })
    }
  },

  head: {
    title: 'News ',
  },
}
</script>
