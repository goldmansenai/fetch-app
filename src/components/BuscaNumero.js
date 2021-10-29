import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";
import "../styles/Buscas.css";

const BuscaNumero = () => {
  const [statePokemon, setStatePokemon] = useState({
    numeroAleatorio: 464,
    error: null,
    isLoaded: false,
    pokemon: null,
  });

  function gerarNumero() {
    const numero = Math.floor(Math.random() * (898 - 1) + 1);
    setStatePokemon({ ...statePokemon, numeroAleatorio: numero });
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${statePokemon.numeroAleatorio}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setStatePokemon({
            ...statePokemon,
            error: null,
            pokemon: result,
            isLoaded: true,
          });
        },
        (error) => {
          setStatePokemon({ ...statePokemon, error: error, isLoaded: true });
        }
      );
  }, [statePokemon.numeroAleatorio]);

  if (statePokemon.error) {
    return <div>Ocorreu um erro: {statePokemon.error.message}</div>;
  } else if (!statePokemon.isLoaded) {
    return <div>Carregando ...</div>;
  } else {
    return (
      <div>
        <div className="label">
          <input
            type="text"
            className="alert alert-primary"
            id="disabledTextInput"
            placeholder="Sem ideias? Clique em  ->"
            disabled
          />
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={gerarNumero}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
            Gerar
          </button>
        </div>
        <div>
          <Pokemon
            pokemon={statePokemon.pokemon}
            // nome={statePokemon.pokemon?.name}
            // tipo={statePokemon.pokemon?.types[0].type?.name}
            // img={statePokemon.pokemon?.sprites.front_default}
            // num={statePokemon.pokemon?.id}
            // habilidade1={statePokemon.pokemon?.abilities[0].ability.name}
            // habilidade2={statePokemon.pokemon?.abilities[1].ability.name}
          />
        </div>
      </div>
    );
  }
};

export default BuscaNumero;
