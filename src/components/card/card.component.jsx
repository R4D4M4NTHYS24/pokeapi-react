import "./card.styles.css";

const Card = ({ pokemon }) => {
  const { id, name } = pokemon;
  //console.log(pokemon);
  return (
    <div className="card-container">
      <img
        alt={`pokemon ${name}`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
      />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
