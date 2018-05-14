const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

require('./api/db');

const { schema } = require('./gql/schema');

const app = express();

// graphql middleware
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// graphiql middleware (UI to test your gql queries)
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
  console.log('graphiql started at http://localhost:3000/graphiql');
});
