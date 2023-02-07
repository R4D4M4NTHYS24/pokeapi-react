import Card from "../card/card.component";
import { CardListContainer } from "./card-list.styles";

const CardList = ({ pokemons }) => (
  <CardListContainer>
    {pokemons.map((pokemon) => {
      return <Card key={pokemon.id} pokemon={pokemon} />;
    })}
  </CardListContainer>
);

export default CardList;
