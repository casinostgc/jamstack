<script setup lang="ts">
import { load } from 'cheerio'

const props = defineProps<{
  markdown: string
}>()

const html = computed(() => {
  const html = useMarkdown(props.markdown)
  const $ = load(html)

  // embeds
  $('.embedly-card').each((i, el) => {
    const embedUrl = $(el).attr('href')
    const iframe = `<iframe src="${embedUrl}" frameborder="0" width="100%" height=100%""></iframe>`
    const sizer =
      '<div class="v-responsive__sizer" style="padding-bottom: 56.25%;"></div>'
    $(el).replaceWith(
      `<div class="v-responsive">${sizer}<div class="v-responsive__content">${iframe}</div></div>`
    )
  })

  return $('body').html() ?? undefined
})
</script>

<template>
  <div class="rte" v-html="useMarkdown(html)"></div>
</template>
