/*jshint esversion: 6 */
const mongoose = require("mongoose");
const PlayerModel = require("../../data/data-models/playerModel");

const Player = mongoose.model("Player", PlayerModel);

// module.exports = addNewPlayer = (req, res) => {
//   let newPlayer = new Player(req.body);

//   newPlayer.save((err, addPlayer) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(addPlayer);
//   });
// };

module.exports = getPlayers = (req, res) => {
  Player.find({}, (err, PlayerList) => {
    if (err) {
      res.send(err);
    }
    res.json(PlayerList);
  });
};

module.exports = getPlayerWithId = (req, res) => {
  // use the request.params method to find the exact player from the id generated in MongoDb
  Player.findById({ _id: req.params.playerId }, (err, playerIdentify) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully identified player" });
  });
};

module.exports = UpdatePlayer = (req, res) => {
  Player.findByIdAndUpdate(
    { _id: req.params.playerId },
    // sends request.body to be updated
    req.body,
    { new: true },
    (err, playerUpdated) => {
      if (err) {
        res.send(err);
      }
      res.json(playerUpdated);
    }
  );
};
// // Remove method working but not update or get
// module.exports = deletePlayer = (req, res) => {
//   Player.findByIdAndRemove({ _id: req.params.playerId }, (err, playerDeleted) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json({ message: "Successfully deleted player" });
//   });
// };
