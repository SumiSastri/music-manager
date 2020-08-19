const mongoose = require("mongoose");
const PlayerModel = require("../../data-models/playerModel");
// import mongoose from "mongoose";
// import { PlayerModel } from "../../data-models/playerModel";

const Player = mongoose.model("Player", PlayerModel);

// export const addNewPlayer = (req, res) => {
module.exports = addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body);

  newPlayer.save((err, AddPlayer) => {
    if (err) {
      res.send(err);
    }
    res.json(AddPlayer);
  });
};

module.exports = getPlayers = (req, res) => {
  Player.find({}, (err, PlayerList) => {
    if (err) {
      res.send(err);
    }
    res.json(PlayerList);
  });
};
