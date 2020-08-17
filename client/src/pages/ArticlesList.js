import React from "react";
import { Link } from "react-router-dom";

// remove this import and import it back as a prop this is now the child
// import ArticleContentData from "./ArticleContentData";
// you are now mapping through the data via the prop articles so it is articles.map()

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article.name}`}
      >
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
