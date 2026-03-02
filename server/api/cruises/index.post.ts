import { type CollectionCreateSchema } from "typesense";

const cruisesSchema: CollectionCreateSchema = {
  name: "cruises",
  fields: [
    { name: "cruise_line", type: "string", facet: true },
    { name: "ship", type: "string", facet: true },
    { name: "departure_port", type: "string", facet: true },
    { name: "arrival_port", type: "string" },
    { name: "embarkation_date", type: "auto" },
    { name: "_embarkation_date", type: "int64" },
    { name: "description", type: "string" },
    { name: "round_trip", type: "bool" },
  ],
};

export default defineEventHandler(async (event) => {
  const client = useTypesenseAdminClient(event);

  const exists = await client.collections("cruises").exists();
  if (exists) await client.collections("cruises").delete();
  await client.collections().create(cruisesSchema);

  const cruises = await $fetch(`/api/cruises`, {
    query: {
      force: 1,
    },
  });

  return await client.collections("cruises").documents().import(cruises);
});
