import React from "react";

import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/documentation">Documentation</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
