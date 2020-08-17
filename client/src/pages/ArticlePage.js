import React from "react";

import ArticlesList from "./ArticlesList";
import ArticleContentData from "./ArticleContentData";
import NotFoundPage from "../common/NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  // find data from hard-coded, front-end data using array find method
  const article = ArticleContentData.find((article) => article.name === name);
  if (!article) return <NotFoundPage />;

  // filter out other articles to link to this page that do not match the article.name prop
  // now in the ArticleList component reassign the prop articles to otherArticles variable created by the filter method -import the child component
  const otherArticles = ArticleContentData.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Blogs:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
