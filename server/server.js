require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Site security
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const rateLimter = new rateLimit({
  windowsMs: 15 * 60 * 1000,
  max: 100,
  delayMs: 0,
});

app.get("/", (req, res) => {
  res.send("your app home route is working");
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
