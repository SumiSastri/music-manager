// import { addNewPlayer } from "../api-route-controllers/playerControllers";
/*jshint esversion: 6 */
const addNewPlayer = require("../routes-control/playerControllers");
const getPlayers = require("../routes-control/playerControllers");
const getPlayerWithId = require("../routes-control/playerControllers");
const deletePlayer = require("../routes-control/playerControllers");

const playerRoutes = (app) => {
  app
    .route("/api-players")
    // GET endpoint - all players
    .get(getPlayers)
    // POST endpoint CReate player
    .post(addNewPlayer);

  //  Unique records access
  // BLOCK THIS OUT AND FIX ID - why is it not being read?

  //   app
  //     .route("/api-players/:PlayerId")
  //     // GET-by-Id endpoint - uniquely identified player
  //     .get(getPlayerWithId)
  //     // PUT endpoint - Update unique id player
  //     .put(UpdatePlayer)
  //     // DELETE endpoint - Delete unique id player
  //     .delete(deletePlayer);
};

// export default playerRoutes;
module.exports = playerRoutes;
