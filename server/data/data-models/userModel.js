// import mongoose from "mongoose";
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// export const UserSchema = new Schema({
module.exports = UserModel = new Schema({
  _id: {
    type: String,
  },
  firstName: {
    type: String,
    default: "Jane or John",
    required: false,
  },
  lastName: {
    type: String,
    default: "Doe",
    required: false,
  },
  email: {
    type: String,
    default: "email@email.com",
    required: true,
  },
  phone: {
    type: Number,
    default: 1234,
    required: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
