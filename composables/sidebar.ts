import { SidebarItem } from '~~/types/contentful'

const sidebarItems = ref<SidebarItem[]>([])
const sidebarReplace = ref<boolean>(false)
const sidebarAppend = ref<boolean>(false)

export const useSidebar = (
  items: SidebarItem[] = [],
  replace: boolean = false,
  append: boolean = false
) => {
  sidebarItems.value = items
  sidebarReplace.value = replace
  sidebarAppend.value = append

  return { sidebarItems, sidebarReplace, sidebarAppend }
}
