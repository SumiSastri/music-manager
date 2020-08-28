/*jshint esversion: 6 */
const mongoose = require("mongoose");
const PlayerModel = require("../../data/data-models/playerModel");
// import mongoose from "mongoose";
// import { PlayerModel } from "../../data-models/playerModel";

const Player = mongoose.model("Player", PlayerModel);

// POST @api-players
// export const addNewPlayer = (req, res) => {
module.exports = addNewPlayer = (req, res) => {
  // the new player is created based on the Player model in the mongoose schema
  let addPlayer = new Player(req.body);
  // it is assigned to a variable and we can now apply methods to the data model constructor
  addPlayer.module.exports = addNewUser = (req, res) => {
    let addPlayer = new Player(req.body);
    addPlayer
      .save()
      .then((savedPlayer) => res.status(200).json(savedPlayer))
      .catch((err) => res.status(422).json({ message: err }));
  };
};

module.exports = getPlayers = (req, res) => {
  Player.find({}, (err, Player) => {
    if (err) {
      res.send(err);
    } else {
      res.json(Player);
    }
  });
};

// module.exports = getPlayerWithId = (req, res) => {
//   // use the request.params method to find the exact player from the id generated in MongoDb
//   return Player.findById(_id:req.params.PlayerId, (err, Player) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(Player);
//   });
// };

// // findOneAndUpdateDeprecated
// module.exports = UpdatePlayer = (req, res) => {
//   Player.findOneAndUpdate(
//     { _id: req.params.PlayerId },
//     req.body,
//     { new: true },
// {useFindAndModify: false}, - needed to make the deprecated version work
//     (err, Player) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(Player);
//     }
//   );
// };

// BLOCK OUT FROM HERE AND CHECK ID not being read - DEPRECATED?
// The method currently is findByIdAndUpdate
// module.exports = UpdatePlayer = (req, res) => {
//   return Player.findByIdAndUpdate(
//     { _id: req.params.player_id },
//     req.body,
//     { new: true },
//     (err, updatedPlayer) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(updatedPlayer);
//     }
//   );
// };

// module.exports = UpdatePlayer = (req, res) => {
//   Player.findByIdAndUpdate({ _id: req.params.id }, req.body, {
//     new: true,
//     useFindAndModify: false,
//   }).then(function (updatedPlayer) {
//     res.send(updatedPlayer);
//   });
// };
// Remove method DEPRECATED
// module.exports = deletePlayer = (req, res) => {
//   return Player.findByIdAndDelete(
//     { _id: req.params.player_id },
//     (err, deletePlayer) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(deletePlayer);
//     }
//   );
// };
// module.exports = deletePlayer = (req, res) => {
//   Player.findByIdAndRemove(
//     { _id: req.params.id },
//     { useFindAndModify: false }
//   ).then(function (deletePlayer) {
//     res.send(deletePlayer);
//   });
// };
