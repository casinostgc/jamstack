import axios from 'axios'

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_MANAGEMENT_TOKEN,
} = process.env

export const contentfulRestClient = axios.create({
  baseURL: `https://api.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`,
  headers: {
    Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_TOKEN}`,
  },
})
