// import fm from 'front-matter'
// import { readFileSync, readdirSync } from 'node:fs'
// import { resolve, parse } from 'node:path'

export default defineEventHandler(async (event) => {
  //   const dir = './-content/casinos'
  //   const entries = readdirSync(resolve(dir)).map((file) => {
  //     const md = readFileSync(resolve(`${dir}/${file}`), { encoding: 'utf8' })
  //     const content = fm<any>(md)
  //     return {
  //       fields: {
  //         title: {
  //           'en-US': content.attributes.title,
  //         },
  //         slug: {
  //           'en-US': `/casinos/${parse(file).name}`,
  //         },
  //         body: {
  //           'en-US': content.body,
  //         },
  //         airportCode: {
  //           'en-US': content.attributes.code,
  //         },
  //       },
  //     }
  //   })
  //   for (const chunk of chunkIntoN(entries, 10)) {
  //     for (const entry of chunk) {
  //       await contentfulRestClient.post('/entries', entry, {
  //         headers: {
  //           'Content-Type': 'application/vnd.contentful.management.v1+json',
  //           'X-Contentful-Content-Type': 'casino',
  //         },
  //       })
  //     }
  //   }
  //   return { entries }
})
