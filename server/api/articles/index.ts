import { gql } from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const { page } = getQuery(event)
  const limit = 10
  const skip = limit * (page ? parseInt(page.toString()) - 1 : 0)

  const query = gql`
    query News($limit: Int!, $skip: Int = 0) {
      newsArticleCollection(
        skip: $skip
        limit: $limit
        order: sys_firstPublishedAt_DESC
      ) {
        total
        items {
          ...NewsArticleFragment
        }
      }
    }

    ${NewsArticleFragment}
  `

  const { newsArticleCollection } = await graphql({
    query,
    variables: {
      limit,
      skip,
    },
  })

  return newsArticleCollection ?? []
})
