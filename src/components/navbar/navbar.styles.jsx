import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: block;

  margin: 0 4vw;

  .navbar:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.8rem;
    transition: all 0.3s;
  }
`;

export const NavbarList = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  a:hover,
  a:active {
    color: #000;
  }

  @media screen and (max-width: 800px) {
    margin: 2vh 3vw;
  }
`;
