import styled from "styled-components";

export const StyledInput = styled.input`
  &.search-box {
    width: 20rem;
    margin: 2vh 40vw;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #aaa;
    }
  }
`;
