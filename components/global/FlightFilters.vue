<script setup lang="ts"></script>

<template>
  <v-card flat>
    <SearchRefinementList
      label="Resort"
      attribute="casino_name"
      show-more
      :show-more-limit="100"
      searchable
    />
    <SearchRefinementList
      label="Destination"
      attribute="destination_name"
      show-more
      :show-more-limit="100"
      searchable
    />
    <SearchRefinementList
      label="Departing Airport"
      attribute="airport_name"
      :limit="7"
      show-more
      :show-more-limit="100"
      searchable
    />
  </v-card>
</template>
