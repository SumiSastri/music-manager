const abcRoutes = (app) => {
  app
    .route("/api-abc")
    // middleware demo - USE OF MONGOOSE AS MIDDLEWARE
    .get(
      (req, res, next) => {
        console.log(`${req.originalUrl}: LOGS /api-abc`);
        console.log(`${req.method}: LOGS METHOD`);
        next();
      },
      (req, res, next) => {
        res.send("/api-abc GET request successful!");
      }
    )

    .post((req, res) => res.send("/api-abc CReate-POST end-point successful!"));

  app
    .route("/api-abc/:abcId")
    // test on postman with /api-abc/123
    .put((req, res) =>
      res.send("/api-abc/:abcId Update-PUT request successful!")
    )

    .delete((req, res) =>
      res.send("/api-abc/:abcId Delete-DELETE request successful!")
    );
};

module.exports = abcRoutes;
