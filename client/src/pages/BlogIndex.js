import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BlogHome from "./BlogHome";
import ArticlesListComponent from "./ArticlesListComponent";
import ArticlePage from "./ArticlePage";
import "../Blog.css";

const BlogIndex = () => {
  return (
    <Router>
      <div className="BlogApp">
        <Switch>
          <Route path="/blogs" component={BlogHome} exact />
          <Route path="/articles-list" component={ArticlesListComponent} />
          <Route path="/article/:name" component={ArticlePage} />
        </Switch>
      </div>
    </Router>
  );
};
export default BlogIndex;
