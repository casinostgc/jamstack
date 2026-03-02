import csv from "csvtojson";
import gql from "graphql-tag";
import { DateTime } from "luxon";
import { z } from "zod/v4";

const CruisesSchema = z.array(
  z.object({
    cruise_line: z.string(),
    ship: z.string(),
    embarkation_date: z.string(),
    // embarkation_date: z.coerce.date().transform((d) => {
    //   if (typeof d === "string") d = new Date(d);
    //   return d.toISOString().split("T")[0];
    // }),
    departure_port: z.string(),
    arrival_port: z.string(),
    description: z.string(),
  }),
);

export default defineCachedEventHandler(
  async (event) => {
    const query = gql`
      {
        settingsCollection(limit: 1, order: sys_publishedAt_DESC) {
          items {
            cruises {
              url
            }
          }
        }
      }
    `;

    const { settingsCollection } = await graphql({ query });

    const csvData = await $fetch<any>(
      settingsCollection?.items?.[0]?.cruises?.url!,
    );

    const data = await csv({
      //   noheader: true,
      //   output: 'csv',
    }).fromString(csvData);

    const cruises = CruisesSchema.parse(data);

    const objects = cruises.map((cruise) => {
      return {
        ...cruise,
        _embarkation_date: DateTime.fromFormat(
          cruise.embarkation_date,
          "yyyy-MM-dd",
        ).valueOf(),
        round_trip: cruise.arrival_port === cruise.departure_port,
      };
    });

    return objects;
  },
  {
    maxAge: 60 * 60,
    shouldBypassCache: (e) => !!getQuery(e).force,
  },
);
