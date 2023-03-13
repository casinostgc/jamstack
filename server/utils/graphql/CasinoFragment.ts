import { gql } from 'graphql-tag'

export const CasinoFragment = gql`
  fragment CasinoFragment on Casino {
    sys {
      id
    }
    title
    slug
    airportCode
    destination {
      sys {
        id
      }
      title
    }

    sys {
      id
      firstPublishedAt
    }
  }
`
