/*jshint esversion: 6 */
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const UserModel = require('../../data/data-models/userModel');

const User = mongoose.model('User', UserModel);

module.exports = addNewUser = (req, res, next) => {
  let addUser = new User(req.body);
  addUser
    .save()
    .then(function (savedUser) {
      res.send(savedUser);
    })
    .catch((err) =>
      res.status().res.json(err, { message: 'successfuly added user' })
    );
};

module.exports = getUsers = (req, res, next) => {
  User.find({})
    .then(function (userList) {
      res.send(userList);
    })
    .catch((err) =>
      res.status().res.json(err, { message: 'successfuly fetched user list ' })
    );

  // Ids not recognised - logs null/ blank

  module.exports = getUserById = (req, res) => {
    console.log(req.params.userId, 'check id'); // to check the id
    User.findById({ _id: req.params.userId })
      .then(function (getUser) {
        console.log('Response from mongo ', getUser);
        res.send(getUser);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: 'successfully fetched user by id ' })
      );
  };

  module.exports = updateUser = (req, res) => {
    //   .route("/api-users/:userId")
    User.findByIdAndUpdate({ _id: req.params.userId }, req.body, {
      new: true,
      useFindAndModify: false,
      omitUndefined: false,
    })
      .then(function (updatedUser) {
        res.send(updatedUser);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: 'successfully updated user by id ' })
      );
  };

  // DELETE works but conflicts with GET - the 2 dont work together
  module.exports = deleteUser = (req, res) => {
    // .route("/api-users/:userId")
    User.findByIdAndRemove(
      { _id: req.params.id },
      {
        new: true,
        useFindAndModify: false,
      }
    )
      .exec()
      .then(function (deletedUser) {
        res.send(deletedUser);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: 'successfully deleted user by id ' })
      );
  };
};
