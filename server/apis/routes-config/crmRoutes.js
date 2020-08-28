// import { addNewUser } from "../routes-control/crmControllers";

const addNewPlayer = require("../routes-control/crmControllers");
const crmRoutes = (app) => {
  app
    .route("/api-users")
    .get((req, res) => res.send("/api-users GET request successful!"))
    .post(addNewUser);
  // .post((req, res) =>
  //   res.send("/api-users CReate-POST end-point successful!")
  // );

  app
    .route("/api-users/:userId")
    .put((req, res) =>
      res.send("/api-users/:userId Update-PUT request successful!")
    )

    .delete((req, res) =>
      res.send("/api-users/:userId Delete-DELETE request successful!")
    );
};

module.exports = crmRoutes;
