import { gql } from 'graphql-tag'

export const NewsArticleFragment = gql`
  fragment NewsArticleFragment on NewsArticle {
    title
    slug
    subtitle
    sys {
      id
      firstPublishedAt
    }
  }
`
