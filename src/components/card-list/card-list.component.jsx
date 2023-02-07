import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ pokemons }) => (
  <div className="card-list">
    {pokemons.map((pokemon) => {
      return <Card key={pokemon.id} pokemon={pokemon} />;
    })}
  </div>
);

export default CardList;
