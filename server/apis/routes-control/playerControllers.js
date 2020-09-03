/*jshint esversion: 6 */
const mongoose = require("mongoose");
const PlayerModel = require("../../data/data-models/playerModel");

// constructor that creates the PlayerModel
const Player = mongoose.model("Player", PlayerModel);

module.exports = addNewPlayer = (req, res) => {
  // pass the body of the request into the constructor model
  let addPlayer = new Player(req.body);
  addPlayer.save(function (err, player) {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(user);
  });
};

module.exports = getPlayers = (req, res) => {
  Player.find({})
    .then((playerList) => res.json(playerList))
    .catch((err) => res.status(422).json({ message: err }));
};

// module.exports = getPlayerById = (req, res, next) => {
//   //   // .route("/api-players/:playerId")
//   console.log(req.body);
//   Player.findById(req.params.playerId, function (err, user) {
//     if (err) {
//       res.status(400).send(err);
//     }
//     res.status(200).send(user);
//   });
// };

// module.exports = updatePlayer = (req, res, next) => {
//   // .route("/api-players/:playerId")
//   // console.log(req.body, "logs req.body");
//   Player.findByIdAndUpdate(
//     req.params.playerId,
//     req.body,
//     { new: true },
//     function (err, player) {
//       if (err) return next(err);
//       res.status(500).send("There was a problem updating the user.");
//       res.status(200).send(player);
//     }
//   );
// };

// module.exports = deletePlayer = (req, res) => {
//   // .route("/api-players/:playerId")
//   Player.findByIdAndRemove(req.params.playerId, {
//     useFindAndModify: false,
//   }).then(function (player) {
//     res.send(player);
//   });
// };
