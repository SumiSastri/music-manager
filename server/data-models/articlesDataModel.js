// STEP 1. import mongoose and schema constructor
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//STEP 2: instantiate and create the model from the constructor
const ArticleModel = new Schema({
  name: { type: String, required: true },
  upvotes: { type: Number, required: false },
  comments: { type: Array, required: false },
});

//STEP 3: export the constructor and import into controller
module.exports = mongoose.model("Article", ArticleModel);
// OR module.exports = Article = mongoose.model('Article', ArticleModel);

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
