//comando: rafce geta o import, const e export abaixo
//rafce + enter
// import React from 'react'

// const Pagina = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Pagina

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import "../styles/Pagina.css";
import BuscaNome from "./BuscaNome";
import BuscaNumero from "./BuscaNumero";

const Pagina = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="card-group">
          <Card nome="Bulbasaur" img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`} tipo="Grass"/>
          <Card nome="Squirtle" img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png`} tipo="Water"/>
          <Card nome="Charmander" img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`} tipo="Fire"/>
        </div>
        <div className="container-buscas">
          <BuscaNome />
          <BuscaNumero />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pagina;