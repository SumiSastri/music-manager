// STEP 1. import mongoose and schema constructor
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//STEP 2: instantiate and create the model from the constructor & export
module.exports = ContentFeedbackModel = new Schema({
  name: { type: String, required: true },
  upvotes: { type: Number, required: false },
  comments: { type: Array, required: false },
});

// HOW TO Transform hard coded data from file into a mongoose schema
// module.exports = articlesInfo = {
//     "k-pop": {
//       upvotes: 0,
//       comments: [],
//     },
//     "hip-hop": {
//       upvotes: 0,
//       comments: [],
//     },
//     "rock-n-roll": {
//       upvotes: 0,
//       comments: [],
//     },
//   };
