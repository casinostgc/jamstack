<template>
  <header>
    <v-navigation-drawer v-model="drawer" app right temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.link"
          router
          exact
          dense
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar clipped-right fixed app>
      <a href="/" class="text-decoration-none black--text">
        <v-toolbar-title v-html="title" />
      </a>

      <v-spacer />

      <v-btn
        v-if="button"
        color="purple"
        dark
        fab
        small
        :title="button"
        :href="`tel:${phone}`"
        class="mx-2"
      >
        <v-icon dark>mdi-phone</v-icon>
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" title="Menu" />
    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: 'DefaultLayout',

  async fetch() {
    const { title, navigation, button, phone } = await this.$content(
      'settings/navigation'
    ).fetch()
    this.title = title
    this.navItems = navigation
    this.button = button
    this.phone = phone
  },

  data: () => ({
    drawer: false,
    title: null,
    button: null,
    phone: null,
    navItems: [],
  }),
}
</script>