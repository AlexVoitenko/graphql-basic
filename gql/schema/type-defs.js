const { gql } = require('../index');
const questionTypes = require('../../api/questions/type-defs/index');
const userTypes = require('../../api/users/type-defs/index');
const anwserTypes = require('../../api/answers/type-defs/index');
const searchTypes = require('../../api/search/type-defs');

const root = gql`
    schema {
        query: Query
        mutation: Mutation
    }

    scalar DateTime
    scalar Email

    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
`;

module.exports = [
  questionTypes,
  userTypes,
  anwserTypes,
  searchTypes,
  root,
].join('');
