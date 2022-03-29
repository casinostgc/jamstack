<template>
  <v-app>
    <v-container>
      <h1 class="display-3 py-5">
        {{ error.statusCode === 404 ? pageNotFound : otherError }}
      </h1>

      <p class="grey--text lighten-5">
        Go to the <NuxtLink to="/"> Home page </NuxtLink>
      </p>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>