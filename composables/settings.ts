import type { Settings } from "~~/types/contentful";

export const useSiteSettings = () => {
  const settings = useState<Settings | null>("siteSettings", () => null);

  callOnce("callSiteSettings", async () => {
    settings.value = await $fetch("/api/settings");
  });

  return { settings };
};
