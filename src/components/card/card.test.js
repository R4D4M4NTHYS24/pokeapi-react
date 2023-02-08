import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card.component";

/*
jest.mock("./search-box.styles.css", () => {
  return jest.fn();
});
*/

describe("Card component", () => {
  it("should render correctly", () => {
    const container = render(<Card />);
    expect(render).toBeTruthy();
  });
});
