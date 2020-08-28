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
};
module.exports = getUsers = (req, res) => {
  User.find({}).then((userList) => res.json(userList));
};

// module.exports = updateUser = (req, res, next) => {
//   // .route("/api-users/:userId")
//   User.findByIdAndUpdate({ _id: req.params.userId }, req.body, {
//     new: true,
//     useFindAndModify: false,
//   }).then(function (user) {
//     res.send(user);
//   });
// };

module.exports = deleteUser = (req, res) => {
  // .route("/api-users/:userId")
  User.findByIdAndRemove(
    { _id: req.params.userId },
    { useFindAndModify: false }
  ).then(function (user) {
    res.send(user);
  });
};
