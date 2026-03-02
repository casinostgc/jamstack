import TypesenseInstantSearchAdapter, {
  type TypesenseInstantsearchAdapterOptions,
} from "typesense-instantsearch-adapter";
import type { SearchParams, DocumentSchema } from "typesense";

type RequireKey<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type AdditionalSearchParams<T extends DocumentSchema> = Prettify<
  RequireKey<SearchParams<T>, "query_by">
>;

type SearchClientOptions<T extends DocumentSchema> = Prettify<
  Partial<TypesenseInstantsearchAdapterOptions> & {
    additionalSearchParameters: AdditionalSearchParams<T>;
  }
>;

export const useSearchClient = <T extends DocumentSchema>(
  options: SearchClientOptions<T>,
) => {
  const {
    typesense: { apiKey, host, port, protocol },
  } = useRuntimeConfig().public;

  return new TypesenseInstantSearchAdapter({
    ...options,

    server: {
      apiKey, // Be sure to use the search-only-api-key
      nodes: [
        {
          host,
          port: Number(port),
          protocol,
        },
      ],
    },
  });
};
