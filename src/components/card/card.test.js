import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card.component";

jest.mock("id", () => {
  return jest.fn();
});

describe("SearchBox", () => {
  it("should render correctly", () => {
    const container = render(<Card />);
    expect(render).toBeTruthy();
  });
});
