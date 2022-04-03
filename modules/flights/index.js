import fs from 'fs'
import path from 'path'
import { $content } from '@nuxt/content'
import { v4 as uuid } from 'uuid'

export default function () {
  const contentDir = path.join('./content')

  this.nuxt.hook('modules:done', async () => {
    console.log('**************************')
    console.log('Generating Flights JSON from CSV')
    console.log('**************************')

    const flightsPage = await $content('flights_index').fetch()
    let flights = []

    // saves CSV to JSON
    try {
      // get csv file
      const csv_slug = flightsPage.csv.match(/(.*)\.csv/)[1]

      const { body } = await $content(csv_slug).fetch()
      flights = body?.map((x) => ({ ...x, slug: uuid() }))

      // map unique id to each row
    } catch (error) {
      console.warn(`Unable to load flights csv`, error.message)
    }

    try {
      // write file
      fs.writeFileSync(
        path.join(contentDir, 'flights.json'),
        JSON.stringify(flights)
      )
    } catch (error) {
      console.error(`Unable to save flights JSON`, error.message)
    }

    // empty directory
    try {
      const flightsCsvDir = path.join(contentDir, '_flightscsv')

      fs.readdir(flightsCsvDir, (err, files) => {
        if (err) return console.error(err)
        files.forEach((file) => {
          if (flightsPage.csv.indexOf(file) == -1) {
            console.log('delete', path.join(flightsCsvDir, file))
            fs.unlinkSync(path.join(flightsCsvDir, file))
          }
        })
      })
    } catch (error) {
      console.error(`Unable to empty flight's CSV directory`, error.message)
    }
  })
}
