const { gql } = require('../../../gql/index');

module.exports = gql`
  enum Tags {
    JS
    React
    GraphQL
    Mongo
    NodeJS
  }
  # Question purpose ..."
  type Question implements Post {
    _id: ID!
    title: String
    description: String
    subDescription: String
    tags: [Tags]
    createdAt: DateTime
    # An author of question
    author: User
    # List of answers"
    answers(limit: Int = 20): [Answer!]!
  }

  extend type Query {
    question(_id: String!): Question!
    questions(limit: Int = 20): [Question!]!
  }
`;
