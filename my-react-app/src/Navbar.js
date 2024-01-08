// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        {/* Add more links as needed */}
        <li className="navbar-right">
          <Link to="/login" className="login-link">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;