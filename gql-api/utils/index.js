const R = require('ramda');

module.exports = {
  // Highlight gql syntax
  gql: String.raw,
  // Perform deep merge list of resolvers in single object
  mergeResolvers: R.reduce(R.mergeDeepRight, []),
};
