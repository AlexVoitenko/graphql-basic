const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');

const app = express();

// SDL
const typeDefs = `
  schema {
    query: Query
  }
  
  type Query {
    currentDate: String
  }
`;

// Resolvers
const resolvers = {
  Query: { currentDate: () => new Date() },
};

// Graphql schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// graphql middleware
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// graphiql middleware (UI to test your gql queries)
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
  console.log('graphiql started at http://localhost:3000/graphiql');
});
