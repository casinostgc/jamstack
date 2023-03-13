import { gql } from 'graphql-tag'
import { Casino, Maybe } from '~~/types/contentful'

export default defineEventHandler(async (event) => {
  const { slug } = getQuery(event)

  const query = gql`
    query CasinoBySlug($slug: String!) {
      casinoCollection(where: { slug: $slug }, limit: 1) {
        items {
          ...CasinoFragment

          destination {
            body
            international
          }

          body
        }
      }
    }

    ${CasinoFragment}
  `

  const { casinoCollection } = await graphql({
    query,
    variables: {
      slug,
    },
  })

  const [casino] = casinoCollection?.items ?? []

  return {
    casino,
    related: await getRelated(casino),
  }
})

async function getRelated(casino: Maybe<Casino>) {
  if (!casino || !casino?.destination?.sys.id) return []

  const query = gql`
    query RelatedCasinos($casinoId: String!, $destinationId: String!) {
      casinoCollection(
        order: title_ASC
        where: {
          sys: { id_not: $casinoId }
          AND: { destination: { sys: { id: $destinationId } } }
        }
      ) {
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
      casinoId: casino.sys.id,
      destinationId: casino.destination.sys.id,
    },
  })

  return casinoCollection?.items ?? []
}
