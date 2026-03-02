import Typesense from "typesense";
import { H3Event } from "h3";

const {
  TYPESENSE_PROTOCOL,
  TYPESENSE_PORT,
  TYPESENSE_HOST,
  TYPESENSE_API_ADMIN_KEY,
  TYPESENSE_API_READ_KEY,
} = process.env;

export const useTypesenseAdminClient = (event: H3Event) => {
  if (getHeader(event, "authorization") !== `Bearer ${TYPESENSE_API_ADMIN_KEY}`)
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Invalid Typesense Admin Key",
    });

  return new Typesense.Client({
    nodes: [
      {
        host: TYPESENSE_HOST || "localhost",
        port: Number(TYPESENSE_PORT) ?? 8108,
        protocol: TYPESENSE_PROTOCOL || "http",
      },
    ],
    apiKey: TYPESENSE_API_ADMIN_KEY || "",
    connectionTimeoutSeconds: 2,
  });
};
