/*jshint esversion: 6 */
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const TestDataModel = require('../../data/data-models/testDataModel');

const TestData = mongoose.model('TestData', TestDataModel);
// Test.route('/api-test');
module.exports = addNewTestData = (req, res) => {
  let addTestData = new TestData(req.body);
  addTestData
    .save()
    .then(function (savedTestData) {
      res.send(savedTestData);
    })
    .catch((err) =>
      res.status().res.json(err, {
        message: 'successfuly added mock data api-test post endpoint',
      })
    );
};

module.exports = getTestData = (req, res) => {
  TestData.find({})
    .then(function (testDataList) {
      res.send(testDataList);
    })
    .catch((err) =>
      res
        .status()
        .res.json(err, { message: 'successfully fetched test data list ' })
    );

  // Ids not recognised - logs null/ blank

  module.exports = getTestDataById = (req, res) => {
    console.log(req.params.testId, 'check id'); // to check the id
    TestData.findById({ _id: req.params.testId })
      .exec()
      .then(function (getTestUrlParam) {
        console.log('Response from mongo ', getTestUrlParam);
        res.send(getTestUrlParam);
      })
      .catch((err) =>
        res.status().res.json(err, {
          message: 'successfully fetched test url param by id ',
        })
      );
  };

  module.exports = updateTestData = (req, res) => {
    //   .route("/api-test/:testId")
    TestData.findByIdAndUpdate({ _id: req.params.testId }, req.body, {
      // explicitly declare new as mongoose sends old data by default
      new: true,
      useFindAndModify: false,
      omitUndefined: false,
    })
      .exec()
      .then(function (updatedTestData) {
        res.send(updatedTestData);
      })
      .catch((err) =>
        res.status().res.json(err, {
          message: 'successfully updated testId by url params ',
        })
      );
  };

  // DELETE works but conflicts with GET - the 2 dont work together
  module.exports = deleteTestData = (req, res) => {
    // .route("/api-test/:testId")
    TestData.findByIdAndRemove(
      { _id: req.params.testId },
      {
        new: true,
        useFindAndModify: false,
      }
    )
      .exec()
      .then(function (deletedTestData) {
        res.send(deletedTestData);
      })
      .catch((err) =>
        res
          .status()
          .res.json(err, { message: 'successfully deleted test data by id ' })
      );
  };
};
