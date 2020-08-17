import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./common/NavBar";
import HomePage from "./common/HomePage";
import AboutPage from "./common/AboutPage";
import NotFoundPage from "./common/NotFoundPage";
import BlogIndex from "./pages/BlogIndex";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <div id="page-body">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/blogs" component={BlogIndex} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
