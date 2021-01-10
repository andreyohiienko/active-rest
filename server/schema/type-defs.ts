import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    pages: [Page]
    page(id: ID!): Page

    slides: [Slide]
    slide(id: ID!): Slide

    allMedia: [Media]
    media(id: ID!): Media

    currentUser: User
    signout: Message

    services: Services
  }

  type Mutation {
    addPage(title: String): Page

    addSlide(title: String!, desc: String, image: String): Slide
    removeSlide(id: ID!): Slide
    updateSlide(id: ID!, title: String, desc: String, image: String): String

    uploadMedia(file: Upload!): Media
    removeMedia(id: ID!, name: String): Media

    currentUser: User

    saveServices(input: ServicesInput): String
  }

  type Message {
    message: String
  }

  type User {
    googleId: ID
    email: String
    name: String
    role: [String]
  }

  type Media {
    id: ID!
    path: String!
    filename: String!
    mimetype: String!
  }

  type Page {
    id: ID!
    title: String
  }

  type Slide {
    id: ID!
    title: String!
    desc: String
    image: String
  }

  input ServicesInput {
    isVisible: Boolean
    services: [ServiceInput]
  }

  input ServiceInput {
    title: String
    desc: String
    image: String
  }

  type Services {
    isVisible: Boolean
    services: [Service]
  }

  type Service {
    id: ID!
    title: String
    desc: String
    image: String
  }
`
