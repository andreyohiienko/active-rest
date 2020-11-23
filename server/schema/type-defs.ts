import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    pages: [Page]
    page(id: ID!): Page
    slider: [Slide]
  }

  type Mutation {
    addPage(title: String): Page
    addSlide(title: String, desc: String, image: String): Slide
  }

  type Page {
    id: ID!
    title: String
  }

  type Slide {
    title: String!
    desc: String
    image: String
  }
`
