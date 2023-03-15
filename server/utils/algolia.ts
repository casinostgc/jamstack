import algoliasearch from 'algoliasearch'

const { ALGOLIA_APPLICATION_ID, ALGOLIA_ADMIN_KEY } = process.env

export const algoliaClient = algoliasearch(
  ALGOLIA_APPLICATION_ID!,
  ALGOLIA_ADMIN_KEY!
)
