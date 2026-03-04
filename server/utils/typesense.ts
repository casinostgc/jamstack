import Typesense from "typesense";
import { H3Event } from "h3";

const {
  TYPESENSE_PROTOCOL,
  TYPESENSE_PORT,
  TYPESENSE_HOST,
  TYPESENSE_API_ADMIN_KEY,
  TYPESENSE_API_READ_KEY,
} = process.env;

const createClient = (apiKey: string) =>
  new Typesense.Client({
    nodes: [
      {
        host: TYPESENSE_HOST || "localhost",
        port: Number(TYPESENSE_PORT) ?? 8108,
        protocol: TYPESENSE_PROTOCOL || "http",
      },
    ],
    connectionTimeoutSeconds: 2,
    apiKey,
  });

/**
 *
 * @param event
 * @returns
 */
export const useTypesenseAdminClient = (event: H3Event) => {
  if (getHeader(event, "authorization") !== `Bearer ${TYPESENSE_API_ADMIN_KEY}`)
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
      message: "Invalid Typesense Admin Key",
    });

  return createClient(TYPESENSE_API_ADMIN_KEY || "");
};

/**
 *
 * @returns
 */
export const useTypesenseReadClient = () => {
  return createClient(TYPESENSE_API_READ_KEY || "");
};
