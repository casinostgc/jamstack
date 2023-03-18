<script setup lang="ts"></script>

<template>
  <v-card flat>
    <SearchRefinementList
      label="Embarkation Port"
      attribute="departure_port"
      :limit="7"
      show-more
      :show-more-limit="100"
      searchable
    />
    <SearchRefinementList
      label="Cruise Line"
      attribute="cruise_line"
      :limit="7"
      show-more
      :show-more-limit="100"
      searchable
    />
    <SearchRefinementList
      label="Cruise Ship"
      attribute="ship"
      :limit="7"
      show-more
      :show-more-limit="100"
      searchable
    />
  </v-card>
</template>
