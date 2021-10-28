import React from "react";

const Pokemon = (props) => {
  return (
    <div>
      <div class="card text-center border border-dark">
        <div class="card-header bg-danger text-white">Nome: {props.nome}</div>
        <div class="card-body">
          <h5 class="card-title">Tipo: {props.tipo}</h5>
          <img
            class="card-img-top"
            src={props.img}
            alt="Foto do Pokemon"
          />
        </div>
        <div class="card-footer text-muted bg-danger">
          <p className="text-white">Habilidades:</p>
          <span className="text-white">
            {props.habilidade1} - {props.habilidade2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
