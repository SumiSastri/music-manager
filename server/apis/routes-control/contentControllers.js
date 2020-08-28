// STEP 1: Import the ORM and the data model
const mongoose = require("mongoose");
const ContentModel = require("../../data/data-models/contentModel");

// STEP2: Instantiate the mongoose schema constructor method
const Content = mongoose.model("Content", ContentModel);

// STEP3: Add CRUD functions that require the model constructor - start with post to seed DB

// CREATE CONTENT FUNCTION @api-content & save to db
module.exports = createNewContent = (req, res) => {
  let addContent = new Content(req.body);
  addContent.save((err, SaveContent) => {
    if (err) {
      res.send(err, `error saving Content data to db`);
    }
    res.json(SaveContent, `success new content saved to database`);
  });
};
