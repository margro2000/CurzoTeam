// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* Replace "Home" text with the image */}
          <Link to="/">
            <img src="path/to/home-icon.png" alt="Home" />
          </Link>
        </li>
        {/* Add other navigation links as needed */}
        {/* <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
