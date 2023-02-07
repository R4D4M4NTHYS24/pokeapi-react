import { CardContainer } from "./card.styles";

const Card = ({ pokemon }) => {
  const { id, name } = pokemon;
  //console.log(pokemon);
  return (
    <CardContainer>
      <img
        alt={`pokemon ${name}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
      />
      <h2>{name}</h2>
    </CardContainer>
  );
};

export default Card;
