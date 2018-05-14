const { gql } = require('../../../gql/index');

module.exports = gql`
  input CreateQuestionInput {
    title: String!
    description: String!
    tags: [Tags]!
    createdBy: ID!
  }
  
  input UpdateQuestionInput {
    title: String
    description: String
    tags: [Tags]!
  }
  
  extend type Mutation {
    createQuestion(question: CreateQuestionInput!): Question!
    updateQuestion(_id: ID!, question: UpdateQuestionInput!): Question!
    deleteQuestion(_id: ID!): Question
  }
`;
