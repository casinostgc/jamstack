export default defineEventHandler(async (event) => {
  const client = useTypesenseAdminClient(event);

  const { keys } = await client.keys().retrieve();
  const collections = await client.collections().retrieve();

  return {
    //
    keys,
    collections,
  };
});
