import React from "react";

import BlogHome from "./BlogHome";
import ArticlesList from "./ArticleList";
import ArticlePage from "./ArticlePage";
import "../Blog.css";

const BlogIndex = () => {
  return (
    <div className="BlogApp">
      <React.Fragment>
        <BlogHome />
        <ArticlesList />
        <ArticlePage />
      </React.Fragment>
    </div>
  );
};
export default BlogIndex;
