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

    console.log('antes do state')
    this.setState({ pokemon: response.data });
    console.log('depois do state')
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
            <i class="bi bi-search"></i>
            Buscar
          </button>
        </div>
        <div>
          <Pokemon
            pokemon={pokemon}
            // tipo={pokemon.types[0]?.type.name}
            // img={pokemon.sprites?.front_default}
            // num={pokemon.id}
            // habilidade1={pokemon.abilities[0].ability.name}
            // habilidade2={pokemon.abilities[1].ability.name}
          />
        </div>
      </div>
    );
  }
}

export default BuscaNome;
