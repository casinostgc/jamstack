<template>
  <header>
    <h2 class="text-h4 mb-1">
      {{ post.title }}
    </h2>

    <div class="text-caption mb-3">
      Posted {{ new Date(post.createdAt).toLocaleString() }}
      <span v-if="post.createdAt !== post.updatedAt">
        - Last Modified {{ new Date(post.updatedAt).toLocaleString() }}
      </span>
    </div>

    <div v-if="post.subtitle" class="text-h6 font-weight-light">
      {{ post.subtitle }}
    </div>

    <v-divider class="my-5"></v-divider>
  </header>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
