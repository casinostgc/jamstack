// import fm from 'front-matter'
// import { readFileSync, readdirSync } from 'node:fs'
// import { resolve } from 'node:path'

export default defineEventHandler(async (event) => {
  //   const dir = './-content/destinations'
  //   const entries = readdirSync(resolve(dir)).map((file) => {
  //     const md = readFileSync(resolve(`${dir}/${file}`), { encoding: 'utf8' })
  //     const content = fm<any>(md)
  //     return {
  //       fields: {
  //         title: {
  //           'en-US': content.attributes.title,
  //         },
  //         body: {
  //           'en-US': content.body,
  //         },
  //         international: {
  //           'en-US': content.attributes.international,
  //         },
  //       },
  //     }
  //   })
  //   for (const chunk of chunkIntoN(entries, 10)) {
  //     for (const entry of chunk) {
  //       const { data } = await contentfulRestClient.post('/entries', entry, {
  //         headers: {
  //           'Content-Type': 'application/vnd.contentful.management.v1+json',
  //           'X-Contentful-Content-Type': 'destination',
  //         },
  //       })
  //     }
  //   }
  //   return { s: 1 }
})
