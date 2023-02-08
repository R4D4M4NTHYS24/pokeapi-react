import React from "react";
import { CardContainer } from "./card.styles";

const Card = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  const { id, name } = pokemon;
  //console.log(id);
  return (
    <CardContainer data-testid="card">
      <img
        alt={`pokemon ${name}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      />

      <h2>{name}</h2>
    </CardContainer>
  );
};

export default Card;
