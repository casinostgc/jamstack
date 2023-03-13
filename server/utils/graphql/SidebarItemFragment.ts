import { gql } from 'graphql-tag'

export const SidebarItemFragment = gql`
  fragment SidebarItemFragment on SidebarItem {
    title
    image {
      url
    }
    body
    buttonText
    buttonLink
    sys {
      id
      firstPublishedAt
    }
  }
`
