import { type CollectionCreateSchema } from "typesense";

const flightsSchema: CollectionCreateSchema = {
  name: "flights",
  fields: [
    { name: "gamingresort", type: "string" },
    { name: "casinocode", type: "string", facet: true },
    { name: "departingat", type: "auto" },
    { name: "arrivingat", type: "auto" },
    { name: "_departingat", type: "int64" },
    { name: "_arrivingat", type: "int64" },
    { name: "departingairport", type: "string", facet: true },
    { name: "casino_name", type: "string", facet: true },
    { name: "destination_name", type: "string", facet: true },
    { name: "airport_name", type: "string", facet: true },
    { name: "casino", type: "auto" },
    { name: "airport", type: "auto", optional: true },
    { name: "_geoloc", type: "geopoint", optional: true },
  ],
};

export default defineEventHandler(async (event) => {
  const client = useTypesenseAdminClient(event);

  if (true) {
    const exists = await client.collections("flights").exists();
    if (exists) await client.collections("flights").delete();
    await client.collections().create(flightsSchema);

    const flights = await $fetch(`/api/flights`);

    await client.collections("flights").documents().import(flights);
  }

  const collections = await client.collections().retrieve();

  // let searchParameters = {
  //   q: "",
  //   query_by: "*",
  //   // sort_by: "FNAME:asc",
  // };
  //
  // .retrieve();
  // .documents()
  // .search(searchParameters);

  return {
    //
    t: new Date(),
    collections,
    // data,
  };
  //
});
