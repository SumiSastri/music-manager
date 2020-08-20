const mongoose = require("mongoose");
const PlayerModel = require("../../data-models/playerModel");
// import mongoose from "mongoose";
// import { PlayerModel } from "../../data-models/playerModel";

const Player = mongoose.model("Player", PlayerModel);

// POST @api-players
// export const addNewPlayer = (req, res) => {
module.exports = addNewPlayer = (req, res) => {
  // the new player is created based on the Player model in the mongoose schema
  let addPlayer = new Player(req.body);
  // it is assigned to a variable and we can now apply methods to the data model constructor
  addPlayer.save((err, SavePlayer) => {
    if (err) {
      res.send(err, `error saving Player data`);
    }
    res.json(SavePlayer, `success new Player saved to database`);
  });
};

module.exports = getPlayers = (req, res) => {
  // from the Player constructor find - from the PlayerModel
  Player.find({}, (err, PlayerList) => {
    if (err) {
      res.send(err);
    }
    res.json(PlayerList);
  });
};

module.exports = getPlayerWithId = (req, res) => {
  // use the request.params method to find the exact player from the id generated in MongoDb
  Player.findById(req.params.PlayerId, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json(Player);
  });
};
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

// The method currently is findByIdAndUpdate
module.exports = UpdatePlayer = (req, res) => {
  Player.findByIdAndUpdate(
    { _id: req.params.PlayerId },
    req.body,
    { new: true },
    (err, Player) => {
      if (err) {
        res.send(err);
      }
      res.json(Player);
    }
  );
};
// Remove method
module.exports = deletePlayer = (req, res) => {
  Player.findByIdAndRemove({ _id: req.params.PlayerId }, (err, Player) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted player" });
  });
};
