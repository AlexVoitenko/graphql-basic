const R = require('ramda');

const { Question } = require('../../questions/modal');
const { Answer } = require('../../answers/modal');

module.exports = {
  Query: {
    search: (_, { term }) => {
      if (term.length < 2) return [];
      return Promise.all([
        Question.find({ title: { $regex: new RegExp(term, 'gi') } }),
        Answer.find({ title: { $regex: new RegExp(term, 'gi') } }),
      ])
        .then(R.unnest);
    },
  },
  Post: {
    __resolveType(parent) {
      if (parent.questionId) return 'Answer';
      if (parent.tags) return 'Question';
      return null;
    },
  },
};
