<script setup lang="ts"></script>

<template>
  <v-card flat>
    <SearchRefinementList
      label="Resort"
      attribute="casino.title"
      show-more
      :show-more-limit="100"
      searchable
    />
    <SearchRefinementList
      label="Destination"
      attribute="casino.destination.title"
      show-more
      :show-more-limit="100"
      searchable
    />
    <SearchRefinementList
      label="Departing Airport"
      attribute="departingairport"
      :limit="7"
      show-more
      :show-more-limit="100"
      searchable
    />
  </v-card>
</template>
