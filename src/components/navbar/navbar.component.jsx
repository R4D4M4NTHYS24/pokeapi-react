import React from "react";

import { NavbarContainer, NavbarList } from "./navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/documentation">Documentation</a>
        </li>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
