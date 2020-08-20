// STEP1: import the controller functions for configuration by routes module
const createNewContent = require("../api-route-controllers/contentControllers");
// const getContent = require("../api-route-controllers/contentControllers");
// const getContentById = require("../api-route-controllers/contentControllers");
// const deleteContent = require("../api-route-controllers/contentControllers");

// STEP2: Create and chain generic routes and test them - start with post to seed db
const contentRoutes = (app) => {
  app.route("/api-content").post(createNewContent);

  //   .get(getContent)
  // STEP5: Create and chain routes for data by unique id access
  //   app
  //     .route("/api-players/:PlayerId")
  //     .get(getContentById)
  //     .put(UpdateContent)
  //     .delete(deleteContent);
};

// STEP3: export default the route, use it in the server by passing app as arg into the route
module.exports = contentRoutes;
