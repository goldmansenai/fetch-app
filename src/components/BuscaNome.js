import React, { Component } from "react";
import Api from "../Api";
import Pokemon from "./Pokemon";
import "../styles/Buscas.css";

class BuscaNome extends Component {
  state = {
    pokemon: [],
  };

  async componentDidMount() {
    var nome = document.getElementById("nome").value.toString().toLowerCase();
    const response = await Api.get(`${nome}`);

    this.setState({ pokemon: response.data });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div>
        <div className="input">
          <input
            type="text"
            className="alert alert-primary text-dark"
            placeholder="Pesquisa por nome"
            id="nome"
          />
          <button
            type="button"
            class="btn btn-outline-danger"
            onClick={() => this.componentDidMount()}
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
            Buscar
          </button>
        </div>
        <div>
          <Pokemon nome={pokemon.name} tipo={pokemon.types?.type} img={pokemon.sprites?.front_default} habilidade={pokemon.ability}/>
        </div>
      </div>
    );
  }
}

export default BuscaNome;
