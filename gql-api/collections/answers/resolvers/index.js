const { User } = require('../../users/model');
const { Question } = require('../../questions/model');
const { Answer } = require('../../answers/model');

module.exports = {
  Answer: {
    author: ({ createdBy }) => User.findById(createdBy),
    question: ({ questionId }) => Question.findById(questionId),
  },
  Mutation: {
    createAnswer: (_, { input }) =>
      Answer.create({
        ...input,
        createdAt: new Date(),
      }),
    updateAnswer: (_, { _id, input }) =>
      Answer.findOneAndUpdate(
        { _id },
        { $set: input },
        { new: true },
      ),
    deleteAnswer: (_, { _id }) => Answer.remove({ _id }),
  },
};
