import styled from "styled-components";

export const NavbarContainer = styled.div`
  .navbar {
    display: block;
  }

  margin: 0 2vw;

  .navbar:link,
  .navbar:visited {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.8rem;
    transition: all 0.3s;
  }
`;

export const NavbarList = styled.div`
  .navbar-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4.8rem;
  }

  &:hover,
  &:active {
    color: #000;
  }
`;
