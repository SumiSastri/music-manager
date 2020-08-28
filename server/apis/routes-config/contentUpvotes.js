const addAnUpvotes = require("../routes-config/");

// Take the post route from server and use to set route, in the post call pass the controller method as an arg,export the new route and use in app - contentFeedbackRoutes(app)
// app.post("/api-content/:name/upvote", (req, res) => {

const contentUpvotes = (app) => {
  //  Unique records access
  app.route("/api-content/:name/upvote").get(contentUpvotes).post(addAnUpvote);
};
module.exports = contentUpvotes;
