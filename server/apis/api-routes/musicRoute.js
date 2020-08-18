import { addNewMusican } from "../api-controllers/musicianRouteController";

// here app refers to the Express router
const routes = (app) => {
  app
    .route("/musicians")
    // POST endpoint
    .post(addNewMusician);
};

export default routes;
