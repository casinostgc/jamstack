import { history as historyRouter } from 'instantsearch.js/es/lib/routers'
import { singleIndex as singleIndexMapping } from 'instantsearch.js/es/lib/stateMappings'

const activeIndex = ref<string>('')

export const useAlgoliaIndex = (name?: string) => {
  activeIndex.value = name ?? ''

  const routing = {
    router: historyRouter(),
    stateMapping: singleIndexMapping(activeIndex.value),
  }

  return { activeIndex, routing }
}
