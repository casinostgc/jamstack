import { z } from "zod/v4";

const keySchema = z.object({
  description: z.string().optional(),
  actions: z.array(z.string()),
  collections: z.array(z.string()),
});

export default defineEventHandler(async (event) => {
  const client = useTypesenseAdminClient(event);

  const keyData = await readValidatedBody(event, keySchema.parse);

  const key = await client.keys().create(keyData);

  return {
    //
    key,
  };
});
