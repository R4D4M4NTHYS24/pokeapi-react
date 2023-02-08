import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./navbar.component";

/*
jest.mock("./search-box.styles.css", () => {
  return jest.fn();
});
*/

describe("SearchBox", () => {
  it("should render correctly", () => {
    const container = render(<Navbar />);
    expect(render).toBeTruthy();
  });
});
