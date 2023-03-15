import { gql } from 'graphql-tag'

export const PageFragment = gql`
  fragment PageFragment on Page {
    title
    slug
    subtitle
    navigationTitle
    icon

    sidebarCollection {
      items {
        ...SidebarItemFragment
      }
    }
    sidebarReplace
    sidebarAppend

    sys {
      id
      firstPublishedAt
    }
  }

  ${SidebarItemFragment}
`
