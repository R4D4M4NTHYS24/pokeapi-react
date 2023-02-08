import styled from "styled-components";

export const CardListContainer = styled.div`
  align-items: center;
  width: 85vw;
  margin: 0 2vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
