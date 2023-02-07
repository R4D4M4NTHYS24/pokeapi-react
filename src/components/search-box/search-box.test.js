import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./search-box.component";

jest.mock("./search-box.styles.css", () => {
  return jest.fn();
});

describe("SearchBox", () => {
  it("should render correctly", () => {
    const container = render(<SearchBox />);
    expect(render).toBeTruthy();
  });
});
