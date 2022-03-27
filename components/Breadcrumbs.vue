<template>
  <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>

<script>
export default {
  props: {
    crumbs: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    items() {
      let crumbs = [
        {
          text: 'Home',
          href: '/',
        },
        ...this.crumbs,
      ]

      crumbs[crumbs.length - 1]['disabled'] = true

      return crumbs
    },
  },
}
</script>