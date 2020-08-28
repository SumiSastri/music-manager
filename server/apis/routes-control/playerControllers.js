/*jshint esversion: 6 */
const mongoose = require("mongoose");
const PlayerModel = require("../../data/data-models/playerModel");

// constructor that creates the PlayerModel
const Player = mongoose.model("Player", PlayerModel);

module.exports = addNewPlayer = (req, res) => {
  // pass the body of the request into the constructor model
  let addPlayer = new Player(req.body);
  addPlayer.save((err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};

module.exports = getPlayers = (req, res) => {
  Player.find({})
    .then((playerList) => res.json(playerList))
    .catch((err) => res.status(422).json({ message: err }));
};

// module.exports = getPlayerWithId = (req, res) => {
//   // .route("/api-players/:playerId")
//   Player.findById(req.params.playerId, (err, Player) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(Player);
//   });
// };

// module.exports = updatePlayer = (req, res) => {
//   // .route("/api-players/:playerId")
//   Player.findOneAndUpdate(
//     { _id: req.params.playerId },
//     req.body,
//     { new: true, useFindAndModify: false },
//     (err, Player) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(Player);
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
