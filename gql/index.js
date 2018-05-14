const R = require('ramda');

module.exports = {
  gql: String.raw,
  mergeResolvers: R.reduce(R.mergeDeepRight, []),
};

