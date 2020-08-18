// import { addNewPlayer } from "../api-route-controllers/playerControllers";
const addNewPlayer = require("../api-route-controllers/playerControllers");
const getPlayers = require("../api-route-controllers/playerControllers");

const playerRoutes = (app) => {
  app
    .route("/api-players")
    // GET endpoint
    .get(getPlayers)
    // POST endpoint
    .post(addNewPlayer);
};

// export default playerRoutes;
module.exports = playerRoutes;
