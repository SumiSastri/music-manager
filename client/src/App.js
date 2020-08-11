import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import BlogHome from "./pages/BlogHome";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <h1>Hello Music Manager</h1>
        <BlogHome />
      </React.Fragment>
    </div>
  );
}

export default App;
