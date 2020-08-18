/*jshint esversion: 6 */
const musiciansRoute = require("../api-route-controllers/musicBandControllers");

const musicianRoutes = (app) => {
  app
    .route("/api-musicians")
    // POST endpoint
    .post(addNewMusician);
};

module.exports = musicianRoutes;
