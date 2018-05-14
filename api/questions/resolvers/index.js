const { Question } = require('./../modal');
const { User } = require('../../users/modal');
const { Answer } = require('../../answers/modal');

module.exports = {
  // Root level query resolvers for questions (to fetch data)
  Query: {
    questions: (_, { limit }) =>
      Question.find({}, {}, { limit, sort: { createdAt: -1 } }),
    question: (_, { _id }) => Question.findById(_id),
  },
  // Root level mutation resolvers for questions (to modify data)
  Mutation: {
    // Create question by input, basic field validation performed by GraphQL
    createQuestion: (_, { question }) =>
      Question.create({
        ...question,
        createdAt: new Date(),
      }),
    // Update question by _id and question input,
    // Return updated question
    updateQuestion: (_, { _id, question }) =>
      Question.findByIdAndUpdate(
        _id,
        { $set: question },
        { new: true }, // Option new means return updated doc
      ),
    // Delete question and return deleted doc
    deleteQuestion: (_, { _id }) => Question.findByIdAndRemove(_id),
  },
  // Resolvers for specific Question field
  Question: {
    // Just Modify existed field
    subDescription: ({ description = '' }) =>
      `${description.substr(0, 25)} ...`,
    // Fetch question author by `createdBy` id field
    // Require to specify User type and resolver
    author: ({ createdBy }) => User.findById(createdBy),
    answers: ({ _id }, { limit }) =>
      Answer.find({ questionId: _id }, {}, { limit, sort: { createdAt: -1 } }),
  },
};
