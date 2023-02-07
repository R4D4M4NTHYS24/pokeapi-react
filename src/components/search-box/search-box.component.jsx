import React from "react";
import { ChangeEvent } from "react";

import { StyledInput } from "./search-box.styles";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <StyledInput
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
