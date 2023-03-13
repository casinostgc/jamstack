import { gql } from 'graphql-tag'

export const PageFragment = gql`
  fragment PageFragment on Page {
    title
    slug
    subtitle
    navigationTitle
    icon
    sys {
      id
      firstPublishedAt
    }
  }
`
