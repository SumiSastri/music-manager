// STEP 1. import mongoose and schema constructor
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//STEP 2: instantiate and create the model from the constructor & export
module.exports = ContentFeedbackModel = new Schema({
  name: { type: String, required: true },
  upvotes: { type: Number, required: false },
  comments: { type: Array, required: false },
});

// HOW TO Transform hard coded data from file into a mongoose schema
// module.exports = articlesInfo = {
//     "k-pop": {
//       upvotes: 0,
//       comments: [],
//     },
//     "hip-hop": {
//       upvotes: 0,
//       comments: [],
//     },
//     "rock-n-roll": {
//       upvotes: 0,
//       comments: [],
//     },
//   };

// BLOG UPVOTES AND COMMENTS WITH LOCAL DB - MOVED FROM SERVER
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("content-feedback-db");

    await operations(db);

    client.close();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error connecting to content-feedback-db", error });
  }
};

app.get("/api-content/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("upvotesCommentsDb")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});

app.post("/api-content/:name/upvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;

    const articleInfo = await db
      .collection("upvotesCommentsDb")
      .findOne({ name: articleName });
    await db.collection("upvotesCommentsDb").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("upvotesCommentsDb")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});

app.post("/api-content/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("upvotesCommentsDb")
      .findOne({ name: articleName });
    await db.collection("upvotesCommentsDb").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("upvotesCommentsDb")
      .findOne({ name: articleName });

    res.status(200).json(updatedArticleInfo);
  }, res);
});
