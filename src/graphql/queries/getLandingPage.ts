import { gql } from 'graphql-request'

export const queryLandingPage = gql`
  query langingPage {
    landingPage {
      data {
        attributes {
          header {
            title
            description
          }
        }
      }
    }
  }
`
