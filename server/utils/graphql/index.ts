import { DocumentNode, print } from 'graphql'
import { Query } from '~~/types/contentful'
import { $fetch } from 'ofetch'

export const graphql = async (options: {
  query: DocumentNode | string
  variables?: Record<string, any>
}) => {
  let { query, variables } = options

  query = typeof query !== 'string' ? print(query) : query

  const { data } = await $fetch<{ data: Query }>(
    `https://graphql.contentful.com/content/v1/spaces/${process.env
      .CONTENTFUL_SPACE_ID!}/environments/${process.env
      .CONTENTFUL_ENVIRONMENT!}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN!}`,
      },
      body: JSON.stringify({ query, variables }),
    }
  )

  return data
}
