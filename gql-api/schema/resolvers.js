const { GraphQLDateTime } = require('graphql-iso-date');

const { mergeResolvers } = require('../utils');
const questionsResolvers = require('../collections/questions/resolvers');
const usersResolvers = require('../collections/users/resolvers');

const scalarResolvers = {
  DateTime: GraphQLDateTime,
};

module.exports = mergeResolvers([
  questionsResolvers,
  usersResolvers,
  scalarResolvers,
]);
