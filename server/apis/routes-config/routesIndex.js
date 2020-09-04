const express = require('express');

// import other routes
const playerRoutes = require('./playerRoutes');
const crmRoutes = require('./crmRoutes');
const mockRoutes = require('./mockRoutes');

module.exports = () => {
  // test home route
  app.get('/', (req, res) => {
    res.send('music-app home route working');
  });
  playerRoutes(app);
  crmRoutes(app);
  mockRoutes(app);
  return app;
};
