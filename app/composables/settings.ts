import type { Settings } from "~~/shared/types/contentful";

const settings = reactive<Partial<Settings>>({});

export const useSiteSettings = () => {
  const init = async () => {
    const { data } = await useFetch("/api/settings");
    Object.assign(settings, data.value);
  };

  return { init, settings };
};
