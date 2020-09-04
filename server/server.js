/*jshint esversion: 6 */

// bring in dotenv files for config of DB
require('dotenv').config();

// express app and port set up
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// file paths for static files
const path = require('path');

// Site security
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// middleware executed in the order that they are described
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

// serve static files
app.use('/', express.static(path.join(__dirname, '../public')));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// test home route - routes stack after the static files
app.get('/', (req, res) => {
  res.send('your app home route is working');
});

// import other routes
const playerRoutes = require('./apis/routes-config/playerRoutes');
playerRoutes(app);

const crmRoutes = require('./apis/routes-config/crmRoutes');
crmRoutes(app);

// or import index file and use routes like so
// app.use("/"{routes: playerRoutes, crmRoutes, testRoutes})

// mongoDb setup
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
      console.log('mongo-db connection working');
    } else {
      console.log('check mongo-db connection', error);
    }
  }
);
mongoose.Promise = global.Promise;

app.listen(PORT, () => console.log(`your-app listening on ${PORT}`));
