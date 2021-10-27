import React from "react";
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div class="card">
      <img class="card-img-top" src={props.pokeImg} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{props.pokeName}</h5>
      </div>
    </div>
  );
};

export default Card;
