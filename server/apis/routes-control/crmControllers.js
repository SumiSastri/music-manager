/*jshint esversion: 6 */
const mongoose = require("mongoose");
const UserModel = require("../../data/data-models/userModel");

// import mongoose from "mongoose";
// import { UserModel } from "../../data-models/userModel";

const User = mongoose.model("User", UserModel);

// export default addNewUser = (req, res) => {
module.exports = addNewUser = (req, res) => {
  let addUser = new User(req.body);
  addUser
    .save()
    .then((savedUser) => res.status(200).json(savedUser))
    .catch((err) => res.status(422).json({ message: err }));

  //   .save((err, SaveUser) => {
  //     if (err) {
  //       res.send(err, `error saving User data`);
  //     }
  //     res.status().json(SaveUser, `success new User saved to database`);
  //     // express deprecated res.json(status, obj): Use res.status(status).json(obj)
  //   });
};
