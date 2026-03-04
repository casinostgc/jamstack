const breadcrumbs = ref<BreadcrumbItem[]>([
  {
    title: 'Home',
    href: '/',
    disabled: true,
  },
])

export const useBreadcrumbs = (arr?: BreadcrumbItem[]) => {
  if (arr?.length) {
    breadcrumbs.value = [
      {
        title: 'Home',
        href: '/',
      },
      ...arr,
    ]
  }

  return { breadcrumbs }
}
