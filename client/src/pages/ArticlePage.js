import React from "react";

import ArticleContentData from "./ArticleContentData";
import NotFoundPage from "../common/NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find data from hard-coded, front-end data using array find method
  const article = ArticleContentData.find((article) => article.name === name);
  if (!article) return <NotFoundPage />;

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Blogs:</h3>
    </>
  );
};

export default ArticlePage;
