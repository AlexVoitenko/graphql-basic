const { gql } = require('../../../utils');

module.exports = gql`
  # Allowed values for quesiton tags
  enum Tags {
    JS
    React
    GraphQL
    Mongo
    NodeJS
  }
  
  type Question {
    _id: ID!
    title: String!
    description: String!
    shortDescription: String!
    tags: [Tags]
    createdAt: DateTime
    # An author of question
    author: User
  }
  
  # Extend root level type Query
  extend type Query {
    question(_id: ID!): Question!
    questions(
      limit: Int = 20
      skip: Int = 0
    ): [Question!]!
  }
  
  input CreateQuestionInput {
    title: String!
    description: String!
    tags: [Tags]!
  }
  
  input UpdateQuestionInput {
    title: String!
    description: String!
    tags: [Tags]!
  }
  
  extend type Mutation {
    createQuestion(
     input: CreateQuestionInput!
    ): Question!
    updateQuestion(
      _id: ID!
      input: UpdateQuestionInput!
    ): Question!
    deleteQuestion(
      _id: ID!
    ): Boolean
  }
`;
