import React from "react";
import { render, cleanup } from "@testing-library/react";
import CardList from "./card-list.component";

afterEach(cleanup);

describe("CardList component", () => {
  it("renders without crashing", () => {
    const { container } = render(<CardList pokemons={[]} />);
    expect(container).toBeTruthy();
  });

  it("renders the correct number of cards", () => {
    const pokemons = [
      {
        id: 1,
        name: "Bulbasaur",
      },
      {
        id: 2,
        name: "Ivysaur",
      },
      {
        id: 3,
        name: "Venusaur",
      },
    ];
    const { getAllByTestId } = render(<CardList pokemons={pokemons} />);
    const cards = getAllByTestId("card");

    expect(cards).toHaveLength(3);
  });
});
