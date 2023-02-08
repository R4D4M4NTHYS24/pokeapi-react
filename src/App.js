import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import Navbar from "./components/navbar/navbar.component";
import logo from "./logo.svg";
import { GlobalStyle } from "./global.styles";

function App() {
  //const [dataPokemon, setDataPokemon] = useState([]);
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilterPokemons] = useState(pokemons);

  useEffect(() => {
    //Es un hoook

    const fetchPokemons = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
        );

        const pokemons = await res.json();

        // setDataPokemon(dataPokemon);

        //console.log(pokemons.results.natural_gift_type);

        //console.log(pokemons.results[0].url);

        function getPokemonId(element) {
          let parts = element.split("/");

          return parseInt(parts[parts.length - 2]);
        }

        for (let i = 0; i < pokemons.results.length; i++) {
          pokemons.results[i] = {
            id: getPokemonId(pokemons.results[i].url),
            name: pokemons.results[i].name,
            url: pokemons.results[i].url,
          };
        }

        setPokemons(pokemons.results);
        //console.log(pokemons.results);

        //console.log(data.results);

        if (!res.ok) throw new Error(`conection API error status${res.status}`);
      } catch (err) {
        alert(`${err} please contact the administrator or try later...`);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const newFilteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterPokemons(newFilteredPokemons);
    //console.log(newFilteredPokemons);
  }, [pokemons, searchField]);

  const onSearchChange = (ChangeEvent) => {
    const searchFieldString = ChangeEvent.target.value.toLocaleLowerCase();
    //console.log(searchFieldString);
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar />
      </header>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder={"search pokemons"}
      />

      <CardList pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
