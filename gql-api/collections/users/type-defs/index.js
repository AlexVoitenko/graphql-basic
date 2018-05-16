const { gql } = require('../../../utils');

module.exports = gql`
  type User {
    _id: ID!
    email: String!
    fullName: String
    createdAt: DateTime
    questions(
      limit: Int = 20
      skip: Int = 0
    ): [Question!]!
  }

  extend type Query {
    user(_id: ID!): User!
    users(limit: Int = 20): [User!]!
  }
`;
