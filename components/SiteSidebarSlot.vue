<template>
  <v-row>
    <v-col cols="12" sm="7" md="8" xl="9">
      <!--  -->
      <slot></slot>
      <!--  -->
    </v-col>
    <v-col cols="12" sm="5" md="4" xl="3">
      <slot name="sidebar">
        <!--  -->
        <slot name="presidebar" />
        <!--  -->
        <v-card v-if="sidebar">
          <v-img
            v-if="sidebar.image"
            :src="sidebar.image"
            :gradient="gradient"
            width="100%"
            height="auto"
          >
          </v-img>

          <v-card-title> {{ sidebar.title }} </v-card-title>

          <v-card-text>
            <nuxt-content :document="sidebar" />
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple lighten-1"
              text
              :href="sidebar.btn_link"
              block
            >
              {{ sidebar.btn_text }}
            </v-btn>
          </v-card-actions>
        </v-card>
        <!--  -->
        <slot name="postsidebar" />
      </slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async fetch() {
    const sidebar = await this.$content('settings/sidebar').fetch()
    this.sidebar = sidebar
    // console.log(sidebar)
  },

  data: () => ({
    // loading: false,
    sidebar: null,
  }),

  computed: {
    gradient() {
      return [
        `${this.sidebar.angle || 45}deg`,
        this.sidebar.color1 || `rgba(25, 32, 72, .7)`,
        this.sidebar.color2 || `rgba(211, 136, 22, 0.7)`,
      ].join(', ')
    },
  },
}
</script>