/*jshint esversion: 6 */

// import { addNewPlayer } from "../api-route-controllers/playerControllers";

const addNewPlayer = require("../routes-control/playerControllers");
const getPlayers = require("../routes-control/playerControllers");
const updatePlayer = require("../routes-control/playerControllers");
const deletePlayer = require("../routes-control/playerControllers");

const playerRoutes = (app) => {
  app
    .route("/api-players")
    // GET endpoint - all players
    .get(getPlayers)
    // POST endpoint CReate player
    .post(addNewPlayer);

  app.route("/api-players/:playerId").put(updatePlayer).delete(deletePlayer);
};

// export default playerRoutes;
module.exports = playerRoutes;
