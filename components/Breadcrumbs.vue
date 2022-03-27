<template>
  <v-breadcrumbs :items="items" ex></v-breadcrumbs>
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
          to: '/',
        },
        ...this.crumbs,
      ]

      crumbs[crumbs.length - 1]['disabled'] = true

      return crumbs.map((c) => {
        c.exact = true
        return c
      })
    },
  },
}
</script>