/*jshint esversion: 6 */
const mongoose = require("mongoose");
const PlayerModel = require("../../data/data-models/playerModel");

const Player = mongoose.model("Player", PlayerModel);

module.exports = addNewPlayer = (req, res) => {
  let addPlayer = new Player(req.body);
  addPlayer
    .save()
    .then((savedPlayer) => res.status(200).json(savedPlayer))
    .catch((err) => res.status(422).json({ message: err }));
};
module.exports = getPlayers = (req, res) => {
  Player.find({}).then((playerList) => res.json(playerList));
};

// module.exports = updatePlayer = (req, res, next) => {
//   // .route("/api-players/:playerId")
//   Player.findByIdAndUpdate({ _id: req.params.playerId }, req.body, {
//     new: true,
//     useFindAndModify: false,
//   }).then(function (player) {
//     res.send(player);
//   });
// };

// module.exports = deletePlayer = (req, res, next) => {
//   // .route("/api-players/:playerId")
//   Player.findByIdAndDelete(
//     { _id: req.params.playerId },
//     { useFindAndModify: false }
//   ).then(function (player) {
//     res.send(player);
//   });
// };
