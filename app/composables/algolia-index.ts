import { history as historyRouter } from "instantsearch.js/es/lib/routers";
import { singleIndex as singleIndexMapping } from "instantsearch.js/es/lib/stateMappings";

export const useAlgoliaIndex = (name: string) => {
  const activeIndex = ref<string>(name);

  const routing = {
    router: historyRouter(),
    stateMapping: singleIndexMapping(activeIndex.value),
  };

  return { activeIndex, routing };
};
