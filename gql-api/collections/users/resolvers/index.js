const { User } = require('../modal/index');
const { Question } = require('../../questions/modal/index');

module.exports = {
  Query: {
    user: (_, { _id }) => User.findById(_id),
    users: (_, { limit }) => User.find({}, {}, { limit }),
  },
  User: {
    fullName: ({ profile } = {}) => profile.fullName,
    // Fetch user questions
    questions: ({ _id }, { limit, skip }) =>
      Question.find(
        { createdBy: _id },
        {},
        { limit, skip, sort: { createdAt: -1 } },
      ),
  },
};
