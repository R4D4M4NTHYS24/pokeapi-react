import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box";

function App() {
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

        setPokemons(pokemons.results);

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
    console.log(newFilteredPokemons);
  }, [pokemons, searchField]);

  const onSearchChange = (ChangeEvent) => {
    const searchFieldString = ChangeEvent.target.value.toLocaleLowerCase();
    //console.log(searchFieldString);
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder={"search pokemons"}
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
