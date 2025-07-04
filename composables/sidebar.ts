import type { SidebarItem } from "~~/types/contentful";

export const useSidebar = (
  items: SidebarItem[] = [],
  replace: boolean = false,
  append: boolean = false
) => {
  const sidebarItems = useState<SidebarItem[]>("sidebarItems", () => []);
  const sidebarReplace = useState<boolean>("sidebarReplace", () => false);
  const sidebarAppend = useState<boolean>("sidebarAppend", () => false);

  sidebarItems.value = items;
  sidebarReplace.value = replace;
  sidebarAppend.value = append;

  return { sidebarItems, sidebarReplace, sidebarAppend };
};
