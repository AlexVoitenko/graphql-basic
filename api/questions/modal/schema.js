const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const schema = new Schema({
  title: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [true],
  },
  tags: {
    type: [String],
    enum: ['JS', 'React', 'GraphQL', 'Mongo', 'NodeJS'],
  },
  createdAt: {
    type: Date,
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  },
});

module.exports = { schema };
