const mongoose = require("mongoose");
const ContentFeedbackModel = require("../../data-models/contentFeedbackModel");
// const contentInfo = require("./mockData/mockArticlesUpvoteData");

const ContentInfo = mongoose.model("ContentInfo", ContentFeedbackModel);

// Separate the route from the function in the server and import data model
// app.post("/api-content/:name/upvote", (req, res) => {
module.exports = addUpvotes = (req, res) => {
  ContentInfo.findByIdAndUpdate(
    { _id: req.params.ContentId },
    req.body,
    { new: true },
    (err, Content) => {
      if (err) {
        res.send(err);
      }
      res.json(Content);
    }
  );
};
// SORT OUT DB AND COLLECTIONS IN CLOUD VS LOCAL
