<template>
  <v-footer class="text-caption">
    <span>
      &copy; {{ new Date().getFullYear() }} CASINOS The Grand Collection LLC
    </span>
    <v-spacer />
    <client-only>
      <a href="/admin" class="grey--text text-decoration-none" target="_blank">
        Admin
      </a>
    </client-only>
  </v-footer>
</template>