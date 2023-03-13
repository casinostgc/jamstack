import axios from 'axios'
import csv from 'csvtojson'
import gql from 'graphql-tag'
import { DateTime } from 'luxon'

const { ALGOLIA_ADMIN_KEY } = process.env

export default defineEventHandler(async (event) => {
  // guard
  if (getHeader(event, 'authorization') !== `Bearer ${ALGOLIA_ADMIN_KEY}`) {
    event.node.res.statusCode = 401
    return { message: 'Invalid Alogolia Admin Key' }
  }

  // const reqBody = await readBody(event)

  const query = gql`
    query {
      settingsCollection(limit: 1, order: sys_publishedAt_DESC) {
        items {
          flights {
            url
          }
        }
      }

      casinoCollection {
        items {
          ...CasinoFragment
        }
      }
    }

    ${CasinoFragment}
  `

  const { settingsCollection, casinoCollection } = await graphql({
    query,
  })

  const { data: csvData } = await axios.get(
    settingsCollection?.items?.[0]?.flights?.url!
  )

  const flights = await csv({
    //   noheader: true,
    //   output: 'csv',
  }).fromString(csvData)

  const altered = flights.map((x) => {
    return {
      ...x,
      _departingat: DateTime.fromFormat(x.departingat, 'MM/dd/yy').valueOf(),
      _arrivingat: DateTime.fromFormat(x.arrivingat, 'MM/dd/yy').valueOf(),
      casinoPath: casinoCollection?.items?.find(
        (c) => c?.airportCode === x.casinocode
      )?.slug,
    }
  })

  // return altered

  const res = await algoliaClient
    .initIndex('Flights')
    .replaceAllObjects(altered, {
      autoGenerateObjectIDIfNotExist: true,
    })

  return res
})
