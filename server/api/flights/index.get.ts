import csv from "csvtojson";
import gql from "graphql-tag";
import { DateTime } from "luxon";
import { z } from "zod/v4";

const FlightsSchema = z.array(
  z.object({
    gamingresort: z.string(),
    casinocode: z.string(),
    departingat: z.string(),
    arrivingat: z.string(),
    departingairport: z.string().length(3),
  }),
);

export default defineCachedEventHandler(
  async (event) => {
    const query = gql`
      {
        settingsCollection(limit: 1, order: sys_publishedAt_DESC) {
          items {
            flights {
              url
            }
          }
        }
        casinoCollection(limit: 1000) {
          items {
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
            headerImage {
              url
            }
          }
        }
        airportCollection(limit: 1000) {
          items {
            name
            iata
            coordinates {
              lat
              lon
            }
          }
        }
      }
    `;

    const { settingsCollection, casinoCollection, airportCollection } =
      await graphql({ query });

    const csvData = await $fetch<any>(
      settingsCollection?.items?.[0]?.flights?.url!,
    );

    const data = await csv({
      //   noheader: true,
      //   output: 'csv',
    }).fromString(csvData);

    const flights = FlightsSchema.parse(data);

    const objects = flights.map((flight) => {
      const casino = casinoCollection?.items?.find(
        (c) => c?.airportCode === flight.casinocode,
      );
      const airport = airportCollection?.items?.find(
        (f) => f?.iata === flight.departingairport,
      );

      const { coordinates } = airport ?? {};

      return {
        ...flight,

        _departingat: DateTime.fromFormat(
          flight.departingat,
          "yyyy-MM-dd",
        ).valueOf(),
        _arrivingat: DateTime.fromFormat(
          flight.arrivingat,
          "yyyy-MM-dd",
        ).valueOf(),

        casino,
        casino_name: casino?.title,
        destination_name: casino?.destination?.title,
        airport_name: [flight.departingairport, airport?.name]
          .filter(Boolean)
          .join(" - "),
        airport,
        _geoloc:
          coordinates?.lat != null && coordinates?.lon != null
            ? [coordinates.lat, coordinates.lon]
            : undefined,
      };
    });

    return objects; //.slice(start, end);
  },
  {
    maxAge: 60 * 60,
    shouldBypassCache: (e) => !!getQuery(e).force,
  },
);
