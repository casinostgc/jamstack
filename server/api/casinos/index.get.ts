import { gql } from 'graphql-tag'

export default defineEventHandler(async (event) => {
  const { page } = getQuery(event)
  const limit = 20
  const skip = limit * (page ? parseInt(page.toString()) - 1 : 0)

  const query = gql`
    query Casinos($limit: Int!, $skip: Int = 0) {
      casinoCollection(skip: $skip, limit: $limit, order: title_ASC) {
        total
        items {
          ...CasinoFragment
        }
      }
    }

    ${CasinoFragment}
  `

  const { casinoCollection } = await graphql({
    query,
    variables: {
      limit,
      skip,
    },
  })

  return casinoCollection ?? []
})
