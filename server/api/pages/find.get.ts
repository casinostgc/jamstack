import { gql } from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event)

  const query = gql`
    query PageBySlug($slug: String!) {
      pageCollection(where: { slug: $slug }, limit: 1) {
        items {
          ...PageFragment
          headerImage {
            url
          }
          body
        }
      }
    }

    ${PageFragment}
  `

  const { pageCollection } = await graphql({
    query,
    variables: {
      slug,
    },
  })

  const [page] = pageCollection?.items ?? []

  return page
})
