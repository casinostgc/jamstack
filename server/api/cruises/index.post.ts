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
          cruises {
            url
          }
        }
      }
    }
  `

  const { settingsCollection } = await graphql({
    query,
  })

  const { data: csvData } = await axios.get(
    settingsCollection?.items?.[0]?.cruises?.url!
  )

  const cruises = await csv({
    //   noheader: true,
    //   output: 'csv',
  }).fromString(csvData)

  const altered = cruises.map((x) => {
    return {
      ...x,
      _embarkation_date: DateTime.fromFormat(
        x.embarkation_date,
        'yyyy-MM-dd'
      ).valueOf(),
      round_trip: x.arrival_port !== x.departure_port,
    }
  })

  //   return altered

  const res = await algoliaClient
    .initIndex('Cruises')
    .replaceAllObjects(altered, {
      autoGenerateObjectIDIfNotExist: true,
    })

  return res
})
