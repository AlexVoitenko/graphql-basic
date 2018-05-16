const bodyParser = require('body-parser');
const {
  graphqlExpress,
  graphiqlExpress,
} = require('apollo-server-express');

const { schema } = require('../schema');

const gqlEndpoint = '/graphql';

const registerGglMiddleware = (app) => {
  // Register graphql middleware
  app.use(gqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));

  // Register graphiql UI tool
  app.use('/graphiql', graphiqlExpress({ endpointURL: gqlEndpoint }));
};

module.exports = {
  registerGglMiddleware,
};
