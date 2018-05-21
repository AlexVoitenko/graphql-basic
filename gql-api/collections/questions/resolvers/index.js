const { Question } = require('../model/index');
const { User } = require('../../users/model/index');
const { Answer } = require('../../answers/model');

const MAX_SHORT_DES_LENGTH = 50;

module.exports = {
  // Root level query resolvers for questions (to fetch data)
  Query: {
    questions: (_, { limit, skip }) =>
      Question.find({}, {}, { limit, skip, sort: { createdAt: -1 } }),
    question: (_, { _id }) => Question.findById(_id),
  },
  Mutation: {
    createQuestion: (_, { input }) =>
      Question.create({
        ...input,
        createdAt: new Date(),
      }),
    updateQuestion: (_, { _id, input }) =>
      Question.findOneAndUpdate(
        { _id },
        { $set: input },
        { new: true },
      ),
    deleteQuestion: (_, { _id }) => Question.remove({ _id }),
  },
  // Resolvers for specific Question field
  Question: {
    // Just Modify existed field
    shortDescription: ({ description = '' }) =>
      description.length < MAX_SHORT_DES_LENGTH
        ? description
        : `${description.substr(0, MAX_SHORT_DES_LENGTH)} ...`,
    // Fetch question author by `createdBy` id field
    // Require to specify User type and resolver
    author: ({ createdBy }) => User.findById(createdBy),
    answers: ({ _id }) =>
      Answer.find({ questionId: _id }, {}, { sort: { createdAt: -1 } }),
  },
};
