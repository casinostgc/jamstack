<script setup lang="ts">
import { Casino } from '~~/types/contentful'

const { path } = useRoute()
const { data } = await useFetch<{
  casino: Casino
  related: Casino[]
}>(`/api/casinos/find?slug=${path}`)

const casino = computed(() => data.value?.casino)
const related = computed(() => data.value?.related)

useBreadcrumbs([
  {
    title: 'Casinos',
    href: '/casinos',
  },
  {
    title: casino.value?.title!,
    disabled: true,
  },
])
</script>

<template>
  <article v-if="casino">
    <section>
      <h2>{{ casino?.title }}</h2>

      <div v-html="useMarkdown(casino.body ?? '')"></div>
    </section>

    <!-- <v-divider></v-divider> -->

    <section v-if="casino.destination">
      <v-card>
        <v-card-title>
          {{ casino.destination?.title }}
        </v-card-title>

        <template v-if="related?.length">
          <v-card-subtitle>
            Other Gaming Locations in {{ casino.destination?.title }}
          </v-card-subtitle>

          <v-card-text>
            <v-btn
              v-for="relative in related"
              size="small"
              variant="outlined"
              color="teal"
              :href="relative.slug!"
              class="ma-1"
            >
              {{ relative.title }}
            </v-btn>
          </v-card-text>
        </template>

        <v-card-text
          class="text-caption"
          v-html="useMarkdown(casino.destination?.body ?? '')"
        />
      </v-card>
    </section>

    <!-- <Flights :filters="[`casinocode:${casino?.airportCode}`]" /> -->
  </article>
</template>
