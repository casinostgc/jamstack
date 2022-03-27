<template>
  <v-img :src="page.image" :aspect-ratio="-1" :gradient="gradient" dark>
    <v-container class="text-center my-15">
      <h1 class="text-h2">
        {{ page.title }}
      </h1>

      <h2 v-if="page.subtitle" class="font-weight-light">
        {{ page.subtitle }}
      </h2>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
    },
    crumbs: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    gradient() {
      return [
        `${this.page.angle || 45}deg`,
        this.page.color1 || `rgba(25, 32, 72, .7)`,
        this.page.color2 || `rgba(211, 136, 22, 0.7)`,
      ].join(', ')
    },
  },
}
</script>