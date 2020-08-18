/*jshint esversion: 6 */
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Site security
const cors = require("cors");
const mongoose = require("mongoose");
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

const articlesInfo = require("./mockData/mockArticlesUpvoteData");
const playerRoutes = require("./apis/api-config-routes/playerRoutes");

playerRoutes(app);

// app.get("/api-players", (req, res) => {
//   res.send("your api-players end-point is working");
// });

app.get("/api-articles", (req, res) => {
  res.send("your api-articles end-point is working");
});

app.post("/api-articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`
    );
});

app.post("/api-articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  // push the request body info
  articlesInfo[articleName].comments.push({ username, text });

  res.status(200).send(articlesInfo[articleName]);
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
