const { gql } = require('../../../gql/index');

module.exports = gql`
  type Answer implements Post {
    _id: ID!
    title: String
    description: String
    createdAt: DateTime
    author: User
    question: Question!
    votesUp: Int!
    votesDown: Int!
  }
`;
