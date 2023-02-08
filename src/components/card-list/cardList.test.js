import React from "react";
import { render } from "@testing-library/react";
import Card from "./card.component";

jest.mock("../../mocks/id", () => {
  return jest.fn();
});

describe("Card component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Card />);
    expect(container).toMatchSnapshot();
  });
});
