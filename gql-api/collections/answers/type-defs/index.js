const { gql } = require('../../../utils');

module.exports = gql`
  type Answer {
    _id: ID!
    title: String!
    description: String!
    createdAt: DateTime
    # An author of question
    author: User
    question: Question!
  }
  
  input CreateAnswerInput {
    title: String!
    description: String!
    questionId: ID!
  }

  input UpdateAnswerInput {
    title: String!
    description: String!
  }
  
  extend type Mutation {
    createAnswer(
      input: CreateAnswerInput!
    ): Answer!
    updateAnswer(
      _id: ID!
      input: UpdateAnswerInput!
    ): Answer!
    deleteAnswer(_id: ID!): Boolean
  }
`;
