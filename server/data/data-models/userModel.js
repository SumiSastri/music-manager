// import mongoose from "mongoose";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// export const UserSchema = new Schema({
module.exports = UserModel = new Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
