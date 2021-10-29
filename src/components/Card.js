import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div class="card">
      {/* <img class="card-img-top" src={props.pokeImg} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{props.pokeName}</h5>
      </div> */}
      <div>
        <div class="card text-center border border-dark">
          <div class="card-header bg-warning text-dark">Nome: {props.nome}</div>
          <div class="card-body bg-dark">
            <img class="card-img-top" src={props.img} alt="Foto do Pokemon" />
          </div>
          <div class="card-footer text-muted bg-warning">
            <span class="text-dark">{props.tipo}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
