// move routes from server to router, change app() methods to router() methods

// POST @/api-articles/:name/upvote to add upvotes to individual articles
app.post("/api-articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`
    );
});

// POST @/api-articles/:name/add-comment to add comments by users to indiv articles
app.post("/api-articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  // push the request body info
  articlesInfo[articleName].comments.push({ username, text });

  res.status(200).send(articlesInfo[articleName]);
});
