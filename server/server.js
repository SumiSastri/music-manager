/*jshint esversion: 6 */
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Site security
const cors = require("cors");
const mongoose = require("mongoose");
const MongoClient = require("mongodb");
const bodyParser = require("body-parser");
const helmet = require("helmet");

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const playerRoutes = require("./apis/api-config-routes/playerRoutes");

playerRoutes(app);

// BLOG UPVOTES AND COMMENTS WITH LOCAL DB
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("content-feedback-db");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
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

const dBurl = process.env.DB_CONNECTION;
mongoose.connect(
  dBurl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log("mongo-db connection working");
    } else {
      console.log("check mongo-db connection", error);
    }
  }
);
mongoose.Promise = global.Promise;
app.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
