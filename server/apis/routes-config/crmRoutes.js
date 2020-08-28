// import { addNewUser } from "../routes-control/crmControllers";

const addNewUser = require("../routes-control/crmControllers");
const getUsers = require("../routes-control/crmControllers");
const updateUser = require("../routes-control/crmControllers");
const deleteUser = require("../routes-control/crmControllers");

const crmRoutes = (app) => {
  app
    .route("/api-users")
    .get(getUsers)
    // .get((req, res) => res.send("/api-users GET request successful!"))
    .post(addNewUser);
  // .post((req, res) =>
  //   res.send("/api-users CReate-POST end-point successful!")
  // );

  app
    .route("/api-users/:userId")
    .put(updateUser)
    // .put((req, res) =>
    //   res.send("/api-users/:userId Update-PUT request successful!")
    // )
    .delete(deleteUser);
  // .delete((req, res) =>
  //   res.send("/api-users/:userId Delete-DELETE request successful!")
  // );
};

module.exports = crmRoutes;
