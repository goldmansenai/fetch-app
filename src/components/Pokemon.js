import React from "react";

const Pokemon = (props) => {
  return (
    <div>
      <div class="card text-center border border-dark">
        <div class="card-header bg-danger text-white">Nome: {props.nome}</div>
        <div class="card-body">
          <h5 class="card-title">Tipo: {props.tipo}</h5>
          <img class="card-img-top" src={props.img} alt="Foto do Pokemon" />
        </div>
        <div class="card-footer text-muted bg-danger">
          <p className="text-white">ID = {props.num}</p>
          <p className="text-white">
            Habilidades:
            <ul className="list-group list-group-horizontal text-center">
              <li class="list-group-item list-group-item-action list-group-item-primary">{props.habilidade1}</li>
              <li class="list-group-item list-group-item-action list-group-item-primary">{props.habilidade2}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
