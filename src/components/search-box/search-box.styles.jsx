import styled from "styled-components";

export const StyledInput = styled.input`
  width: 50%;
  margin: 2vh 25%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
  @media screen and (max-width: 800px) {
    width: 50%;
    margin: 2vh 25%;
  }
`;
