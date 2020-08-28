/*jshint esversion: 6 */
const mongoose = require("mongoose");
const UserModel = require("../../data/data-models/userModel");

const User = mongoose.model("User", UserModel);

module.exports = addNewUser = (req, res) => {
  let addUser = new User(req.body);
  addUser.save((err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};

module.exports = getUsers = (req, res) => {
  User.find({})
    .then((userList) => res.json(userList))
    .catch((err) => res.json(err));
};
// ID routes conflicting with general routes
// // UPDATE working as delete
// module.exports = updateUser = (req, res, next) => {
//   //   // .route("/api-users/:userId")
//   User.findById(req.params.userId)
//     .then((user) => {
//       Object.assign(user, req.body);
//       return user.save();
//     })
//     .then((user) => res.status(200).json(user))
//     .catch((err) => res.status(500).json(err));
// };

// // DELETE works but conflicts with GET - the 2 dont work together
// module.exports = deleteUser = (req, res) => {
//   // .route("/api-users/:userId")
//   User.findByIdAndRemove(
//     { _id: req.params.userId },
//     { useFindAndModify: false }
//   ).then(function (user) {
//     res.send(user);
//   });
// };
