/*jshint esversion: 6 */
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Site security
const cors = require("cors");
const mongoose = require("mongoose");
// const MongoClient = require("mongodb");
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

const playerRoutes = require("./apis/routes-config/playerRoutes");
playerRoutes(app);

const crmRoutes = require("./apis/routes-config/crmRoutes");
crmRoutes(app);

app.get(`/api-players`, (req, res) => {
  res.send(`api-players working`);
});

const dBUri = process.env.DB_CONNECTION;
mongoose.connect(
  dBUri,
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
