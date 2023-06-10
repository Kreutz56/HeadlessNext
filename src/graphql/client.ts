import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(`${process.env.STRAPI_URL}/graphql`)
