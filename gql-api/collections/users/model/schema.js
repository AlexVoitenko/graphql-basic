const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: [true],
    unique: true,
  },
  profile: {
    fullName: {
      type: String,
      required: [true],
    },
  },
});

module.exports = { schema };
