// STEP 1: import the post route, you do not need mongoose or react as you are using vanilla node import and module.exports.
import { addNewMusician } from "../api-controllers/musicianRouteController";

// here app arg refers to the Express router, the function creates the routes from the controllers
const musicianRoutes = (app) => {
  app
    .route("/api-musicians")
    // POST endpoint
    .post(addNewMusician);
};
// you are exporting this with ES6 to the Express App, server.js
export default musicianRoutes;
