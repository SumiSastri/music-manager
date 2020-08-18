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
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  iscoach: {
    type: Boolean,
    default: false,
    required: false,
  },
  team: {
    type: String,
    required: false,
  },
  speed: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  strength: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  endurance: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  ability: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  techniques: {
    type: Number,
    enum: [1, 2, 3],
    required: false,
  },
  tactical: {
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
