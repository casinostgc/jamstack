/**
 * redirects
 * https://docs.netlify.com/routing/redirects/
 */
export default defineEventHandler(async (event) => {
  setHeader(event, 'Content-Type', 'text/plain')

  const { vanityUrlCollection } = await graphql({
    query: `{ vanityUrlCollection { items { source target } } }`,
    // variables: {},
  })

  const redirects = vanityUrlCollection?.items ?? []

  return redirects.map((r) => `${r?.source}\t${r?.target}`).join('\n')
})
