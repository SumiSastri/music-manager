/*jshint esversion: 6 */

const addNewTestData = require('../routes-control/mockControllers');
const getTestData = require('../routes-control/mockControllers');
const getTestDataById = require('../routes-control/mockControllers');
const updateTestData = require('../routes-control/mockControllers');
const deleteTestData = require('../routes-control/mockControllers');

const testRoutes = (app) => {
  app
    .route('/api-test')
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getTestData)
    // .get((req, res) => res.send("/api-test GET end point successful!"))
    .post(addNewTestData);
  // .post((req, res) =>
  //   res.send("/api-test CReate-POST end-point successful!")
  // );

  app
    .route('/api-test/:testId')
    .get((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getTestDataById)
    // .get((req, res) =>
    //   res.send("/api-test/:testId GET- get user by Id request successful!")
    // )
    // .put((req, res) =>
    //   res.send("/api-test/:testId Update-PUT request successful!")
    // )
    .put(updateTestData)
    .delete(deleteTestData);
  // .delete((req, res) =>
  //   res.send("/api-users/:userId Delete-DELETE request successful!")
  // );
};
module.exports = testRoutes;
