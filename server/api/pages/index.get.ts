import { gql } from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const query = gql`
    query {
      pageCollection {
        items {
          ...PageFragment
        }
      }
    }

    ${PageFragment}
  `

  const { pageCollection } = await graphql({
    query,
  })

  const pages = pageCollection?.items ?? []

  return pages
})
