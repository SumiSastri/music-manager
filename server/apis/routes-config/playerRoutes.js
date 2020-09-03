/*jshint esversion: 6 */
const addNewPlayer = require("../routes-control/playerControllers");
const getPlayers = require("../routes-control/playerControllers");
const getPlayerWithId = require("../routes-control/playerControllers");
const updatePlayer = require("../routes-control/playerControllers");
const deletePlayer = require("../routes-control/playerControllers");

const playerRoutes = (app) => {
  app
    .route("/api-players")
    // GET endpoint - all players
    .get(getPlayers)
    // POST endpoint - to end of database
    .post(addNewPlayer);

  //  Unique records access
  app
    .route("/api-players/:playerId")
    // GET-by-Id endpoint - uniquely identified player
    .get(getPlayerWithId)
    // PUT endpoint - uniquely identified player is updated
    .put(updatePlayer)
    // DELETE endpoint
    .delete(deletePlayer);
};

module.exports = playerRoutes;
