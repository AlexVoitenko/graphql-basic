const { Question } = require('../../questions/modal');
const { User } = require('../../users/modal');
const { Vote } = require('../../votes/modal');

module.exports = {
  Answer: {
    question: ({ questionId }) => Question.findById(questionId),
    author: ({ createdBy }) => User.findById(createdBy),
    votesUp: ({ _id }) => Vote.count({ answerId: _id, isPositive: true }),
    votesDown: ({ _id }) => Vote.count({ answerId: _id, isPositive: false }),
  },
};
