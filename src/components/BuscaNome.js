import React, { Component } from "react";
import Api from "../Api";
import Pokemon from "./Pokemon";

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
            <i class="bi bi-search"></i>
            Buscar
          </button>
        </div>
        <div>
          <Pokemon
            pokemon={pokemon}
          />
        </div>
      </div>
    );
  }
}

export default BuscaNome;
