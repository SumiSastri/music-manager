const mongoose = require("mongoose");
// import mongoose from "mongoose";

const Schema = mongoose.Schema;
// export const PlayerSchema = new Schema({

module.exports = PlayerModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  upvotes: {
    type: Number,
    required: false,
  },
  comments: {
    type: Array,
    required: false,
  },
  isSoloArtist: {
    type: Boolean,
    default: false,
    required: false,
  },
  bandName: {
    type: String,
    required: false,
  },
  twitterFollowers: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  fBFollowers: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  instaFollowers: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  youTubeFollowers: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  tkTkFollowers: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

// These are NOT working with the compiler
// OR module.exports = mongoose.model("Player", PlayerModel);
// module.exports = Player = mongoose.model("Player", PlayerModel);
