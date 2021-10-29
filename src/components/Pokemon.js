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
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
