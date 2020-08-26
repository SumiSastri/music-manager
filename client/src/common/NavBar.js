import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <div className="nav-wrapper blue darken-1">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
