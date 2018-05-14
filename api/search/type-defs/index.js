const { gql } = require('../../../gql');

module.exports = gql`  
  interface Post {
    title: String
    description: String
    author: User
  }
  
  extend type Query {
    search(term: String!): [Post]!
  }
`;
