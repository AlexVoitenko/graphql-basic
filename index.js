const express = require('express');

const { registerGglMiddleware } = require('./gql-api/express-middleware');

require('./db');

const app = express();

registerGglMiddleware(app);

app.listen(3000, () => {
  console.log('graphiql: http://localhost:3000/graphiql');
})
