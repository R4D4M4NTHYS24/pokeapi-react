import styled from "styled-components";

export const CardContainer = styled.div`
  img {
    width: 20vw;
    height: 40vh;
  }

  height: 60vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;

  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 800px) {
    height: 40vh;
  }
`;
