<template>
  <article>
    <Breadcrumbs :crumbs="[{ text: 'News' }]" />

    <nuxt-content :document="page" />

    <v-card class="mt-5">
      <v-list>
        <template v-for="(post, i) in posts">
          <v-divider v-if="i !== 0" inset :key="`divider-${i}`"></v-divider>
          <v-list-item
            :key="i"
            :to="`/news/${post.slug}`"
            three-line
            router
            exact
          >
            <v-list-item-avatar color="deep-purple lighten-1">
              <v-icon dark> mdi-newspaper </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.title" />
              <v-list-item-subtitle
                v-text="new Date(post.createdAt).toLocaleString()"
                class="text-caption"
              />
              <v-list-item-subtitle
                v-if="post.subtitle"
                v-text="post.subtitle"
                class="mt-1"
              />
            </v-list-item-content>
          </v-list-item>
        </template>
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
      const posts = await $content('posts')
        .sortBy('createdAt', 'desc')
        .without(['body'])
        .fetch()
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
