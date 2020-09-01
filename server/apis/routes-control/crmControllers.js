/*jshint esversion: 6 */
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const UserModel = require("../../data/data-models/userModel");

const User = mongoose.model("User", UserModel);

module.exports = addNewUser = (req, res) => {
  let addUser = new User(req.body);
  addUser
    .save()
    .then(function (savedUser) {
      res.send(savedUser);
    })
    .catch((err) =>
      res.status().res.json(err, { message: "successfuly added user" })
    );
};

module.exports = getUsers = (req, res) => {
  User.find({})
    .then(function (userList) {
      res.send(userList);
    })
    .catch((err) =>
      res.status().res.json(err, { message: "successfuly fetched user list " })
    );

  // ID routes conflicting with general routes

  module.exports = getUserById = (req, res) => {
    User.findById(req.params.userId)
      .exec()
      .then(function (getUser) {
        res.send(getUser);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: "successfuly fetched user by id " })
      );
  };

  module.exports = updateUser = (req, res, next) => {
    //   .route("/api-users/:userId")
    // Model.findByIdAndUpdate(id, updateObj, {new:true}, func(model, err){}) EXPLICITLY SET?
    // Model.findByIdAndUpdate(req.params.id, {$set: req.body.modelInfo}, { new: true }, function(err, updatedPayload){
    // });

    User.findByIdAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      useFindAndModify: false,
      omitUndefined: false,
    })
      .exec()
      .then(function (updatedUser) {
        res.send(updatedUser);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: "successfuly updated user by id " })
      );
  };

  // DELETE works but conflicts with GET - the 2 dont work together
  module.exports = deleteUser = (req, res) => {
    // .route("/api-users/:userId")
    User.findByIdAndRemove(req.body, {
      new: true,
      useFindAndModify: false,
    })
      .exec()
      .then(function (deleteUser) {
        res.send(deleteUser);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: "successfuly deleted user by id " })
      );
  };
};
