import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    pages: [Page]
    page(id: ID!): Page
    slider: [Slide]
    allMedia: [Media]
    media(id: ID!): Media
  }

  type Mutation {
    addPage(title: String): Page
    addSlide(title: String, desc: String, image: String): Slide
    uploadMedia(files: [Upload!]): Media
  }

  type Media {
    path: String
    filename: String
    mimetype: String
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
