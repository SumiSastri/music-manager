const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = TestDataModel = new Schema({
  _id: {
    type: String,
  },
  fullName: {
    type: String,
    default: 'Jane or John Doe',
    required: false,
  },
  phoneNumber: {
    type: Number,
    default: 1234,
    required: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
