const mongoose = require('mongoose');

const schema = {};

const Vote = mongoose.model('Vote', schema);

module.exports = { Vote };
