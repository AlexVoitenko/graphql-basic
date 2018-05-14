const { gql } = require('../../../gql/index');

module.exports = gql`
  type User {
    _id: ID!
    email: String!
    fullName: String
    createdAt: DateTime
    questions(limit: Int = 20): [Question!]!
    answers(limit: Int = 20): [Answer!]!
  }

  extend type Query {
    user(_id: String!): User!
    users: [User!]!
  }
`;
