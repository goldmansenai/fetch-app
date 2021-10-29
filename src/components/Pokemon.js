import React from "react";  

function PokemonType(props) {
  let type = 'none';
  
  if(props.types) {
    type = props.types.map(x => x.type.name).join('/');
  }
    
  return <h5 class="card-title">Tipo: {type}</h5>
}
const Pokemon = (props) => {
  const pokemon = props.pokemon;

  return (
    <div>
      <div class="card text-center border border-dark">
        <div class="card-header bg-danger text-white">Nome: {pokemon?.name}</div>
        <div class="card-body">
          <PokemonType types={pokemon?.types} />
          <img class="card-img-top" src={pokemon?.sprites?.front_default} alt="Foto do Pokemon" />
        </div>
        <div class="card-footer text-muted bg-danger">
          <span class="text-white">ID = {pokemon?.id}</span>
          {/* Adicionar validações para props habilidades não causarem erros
          <p className="text-white">
            Habilidades:
            <ul className="list-group list-group-horizontal text-center">
              <li class="list-group-item list-group-item-action list-group-item-primary">{props.habilidade1}</li>
              <li class="list-group-item list-group-item-action list-group-item-primary">{props.habilidade2}</li>
            </ul>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
