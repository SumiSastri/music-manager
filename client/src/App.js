import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./common/NavBar";
import HomePage from "./common/HomePage";
import AboutPage from "./common/AboutPage";
import NotFoundPage from "./common/NotFoundPage";
import BlogIndex from "./content-pages/BlogIndex";
import PlayerIndex from "./players/PlayersIndex";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        <NavBar />
      </div>
      <div id="page-body">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/blogs" component={BlogIndex} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path="/players" component={PlayerIndex} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
