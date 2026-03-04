import TypesenseInstantSearchAdapter, {
  type TypesenseInstantsearchAdapterOptions,
} from "typesense-instantsearch-adapter";
import type { SearchParams, DocumentSchema } from "typesense";
import type { InstantSearch } from "instantsearch.js";

type RequireKey<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type AdditionalSearchParams<T extends DocumentSchema> = Prettify<
  RequireKey<SearchParams<T>, "query_by">
>;

type SearchClientParams<T extends DocumentSchema> = Prettify<
  Partial<TypesenseInstantsearchAdapterOptions> & {
    additionalSearchParameters: AdditionalSearchParams<T>;
  }
>;

export const useTypesenseInstance = <T extends DocumentSchema>(
  initParams?: SearchClientParams<T>,
) => {
  const {
    typesense: { apiKey, host, port, protocol },
  } = useRuntimeConfig().public;

  const params = ref<SearchClientParams<T>>({
    additionalSearchParameters: {
      query_by: "*",
    },
    ...initParams,
  });

  const options = computed<TypesenseInstantsearchAdapterOptions>(() => ({
    ...params.value,

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
  }));

  const instance = new TypesenseInstantSearchAdapter(options.value);

  const searchClient = ref(instance.searchClient);

  const instantSearchRef = useTemplateRef<{
    instantSearchInstance?: InstantSearch;
  }>("instantSearchRef");

  watch(options, (newOptions?: TypesenseInstantsearchAdapterOptions) => {
    if (!newOptions) return;
    const updated = instance.updateConfiguration(newOptions);
    if (!updated) return;
    instantSearchRef.value?.instantSearchInstance?.refresh();
  });

  return { searchClient, params, instantSearchRef };
};
