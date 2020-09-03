/*jshint esversion: 6 */

// STEP 3 import controllers
const addNewUser = require("../routes-control/crmControllers");
const getUsers = require("../routes-control/crmControllers");
const getUserById = require("../routes-control/crmControllers");
const updateUser = require("../routes-control/crmControllers");
const deleteUser = require("../routes-control/crmControllers");

const crmRoutes = (app) => {
  app
    .route("/api-users")
    .get((req, res, next, end) => {
      // STEP 2 test middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getUsers)

    // STEP 1 test routes with Postman
    // .get((req, res) => res.send("/api-users GET request successful!"))
    .post(addNewUser);
  // .post((req, res) =>
  //   res.send("/api-users CReate-POST end-point successful!")
  // );

  app
    .route("/api-users/:userId")
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getUserById)
    // .get((req, res) =>
    //   res.send("/api-users/:userId GET- get user by Id request successful!")
    // )
    // .put((req, res) =>
    //   res.send("/api-users/:userId Update-PUT request successful!")
    // )
    .put(updateUser)
    .delete(deleteUser);
  // .delete((req, res) =>
  //   res.send("/api-users/:userId Delete-DELETE request successful!")
  // );
};
// STEP 4 export controllers and import into server
module.exports = crmRoutes;
