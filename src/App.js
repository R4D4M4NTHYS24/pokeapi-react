import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //Es un hoook

    const fetchPokemons = async () => {
      try {
        const res = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151&offset=12"
        );

        const data = await res.json();
        console.log(data);

        if (!res.ok) throw new Error(`conection API error status${res.status}`);
      } catch (err) {
        alert(`${err} please contact the administrator or try later...`);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
