import React from "react";
import ArticlesList from "./ArticlesList";
import ArticleContentData from "./ArticleContentData";

// make the data a prop of the ArticlesList component - this is now the parent
// it is the parent page that is displayed in the index page
const ArticlesListComponent = () => (
  <>
    <h1>Music Blog</h1>
    <ArticlesList articles={ArticleContentData} />
  </>
);

export default ArticlesListComponent;
