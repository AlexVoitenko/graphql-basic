const { gql } = require('../utils');

const questionTypes = require('../collections/questions/type-defs');
const userTypes = require('../collections/users/type-defs');

const root = gql`
  schema {
    query: Query
  }
  
  # Declare custom scalars
  scalar DateTime
  
  type Query {
    _: Boolean # Costyl' because type can't be empty
  }
`;

module.exports = [
  questionTypes,
  userTypes,
  root,
].join('');
