const { User } = require('./../modal');
const { Question } = require('../../questions/modal');
const { Answer } = require('../../answers/modal');

module.exports = {
  Query: {
    user: (_, { _id }) => User.findById(_id),
    users: () => User.find({}),
  },
  User: {
    fullName: ({ profile }) => profile && profile.fullName,
    questions: ({ _id }, { limit }) =>
      Question.find({ createdBy: _id }, {}, { limit, sort: { createdAt: -1 } }),
    answers: ({ _id }, { limit }) =>
      Answer.find({ createdBy: _id }, {}, { limit, sort: { createdAt: -1 } }),
  },
};
