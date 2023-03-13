import gql from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const query = gql`
    query {
      settingsCollection(limit: 1, order: sys_publishedAt_DESC) {
        items {
          siteTitle
          companyName
          companyPhone
          companyEmail
          navigationCollection {
            items {
              ...PageFragment
            }
          }
          flights {
            url
          }
          sidebarCollection {
            items {
              ...SidebarItemFragment
            }
          }
        }
      }
    }

    ${PageFragment}
    ${SidebarItemFragment}
  `

  const { settingsCollection } = await graphql({
    query,
  })

  const [settings] = settingsCollection?.items ?? []

  return settings
})
