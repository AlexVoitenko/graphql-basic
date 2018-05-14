const { GraphQLDateTime } = require('graphql-iso-date');
const { GraphQLEmail } = require('graphql-custom-types');

const { mergeResolvers } = require('../index');
const questionResolvers = require('../../api/questions/resolvers');
const userResolvers = require('../../api/users/resolvers');
const answerResolvers = require('../../api/answers/resolvers');
const searchResolvers = require('../../api/search/resolvers/index');

module.exports = mergeResolvers([
  questionResolvers,
  userResolvers,
  answerResolvers,
  searchResolvers,
  {
    DateTime: GraphQLDateTime,
    Email: GraphQLEmail,
  },
]);
