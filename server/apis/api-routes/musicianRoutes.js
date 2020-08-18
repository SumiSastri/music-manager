/*jshint esversion: 6 */
import { addNewMusician } from "../api-controllers/musicianRouteController";

const musicianRoutes = (app) => {
  app
    .route("/api-musicians")
    // POST endpoint
    .post(addNewMusician);
};

export default musicianRoutes;

// const addNewMusician = require("../api-controllers/musicianRouteController");
// THIS VERSION ALSO CRASHING
// module.exports = musicianRoutes = (app) => {
//   app
//     .route("/api-musicians")
//     // POST endpoint
//     .post(addNewMusician);
// };
