import { gql } from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event)

  const query = gql`
    query ArticleBySlug($slug: String!) {
      newsArticleCollection(where: { slug: $slug }, limit: 1) {
        items {
          ...NewsArticleFragment
          body
        }
      }
    }

    ${NewsArticleFragment}
  `

  const { newsArticleCollection } = await graphql({
    query,
    variables: {
      slug,
    },
  })

  const [page] = newsArticleCollection?.items ?? []

  return page
})
