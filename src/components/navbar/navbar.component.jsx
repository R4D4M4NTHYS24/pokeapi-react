import React from "react";

import { NavbarContainer, NavbarList } from "./navbar.styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <li>
          <a href="https://cv-camilo-restrepo.netlify.app/">About me</a>
        </li>
        <li>
          <a href="https://github.com/R4D4M4NTHYS24/pokeapi-react/blob/master/README.md">
            Documentation
          </a>
        </li>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
