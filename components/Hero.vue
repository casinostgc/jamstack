<template>
  <v-img
    :src="hero.image"
    :gradient="`${hero.angle || '45'}deg, #ffffff, #ffffff, ${
      hero.color1 || 'rgba(25, 32, 72, 0.5)'
    }`"
    :aspect-ratio="-1"
    cover
    class="py-10"
  >
    <v-container>
      <v-row align="center">
        <v-col cols="12" sm="8" md="7">
          <h2 class="display-2 font-weight-bold" v-html="hero.heading"></h2>

          <nuxt-content
            :document="hero"
            class="text-h5 font-weight-light my-5"
          />

          <p>
            <v-btn href="tel:18668182646" x-large dark color="teal"
              >Get Started</v-btn
            >
            <v-btn to="/news" x-large dark color="teal lighten-4 teal--text"
              >Latest Offers</v-btn
            >
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
}
</script>
