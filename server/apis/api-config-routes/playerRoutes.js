// import { addNewPlayer } from "../api-route-controllers/playerControllers";
const addNewPlayer = require("../api-route-controllers/playerControllers");
const getPlayers = require("../api-route-controllers/playerControllers");
const getPlayerWithId = require("../api-route-controllers/playerControllers");
const deletePlayer = require("../api-route-controllers/playerControllers");

const playerRoutes = (app) => {
  app
    .route("/api-players")
    // GET endpoint - all players
    .get(getPlayers)
    // POST endpoint - to end of database
    .post(addNewPlayer);

  //  Unique records access
  app
    .route("/api-players/:PlayerId")
    // GET-by-Id endpoint - uniquely identified player
    .get(getPlayerWithId)
    // PUT endpoint - uniquely identified player is updated
    .put(UpdatePlayer)
    // DELETE endpoint
    .delete(deletePlayer);
};

// export default playerRoutes;
module.exports = playerRoutes;
