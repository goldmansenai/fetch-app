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
          <Card pokeName="Pikachu" pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}/>
          <Card pokeName="Raticate" pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png`}/>
          <Card pokeName="Clefairy" pokeImg={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png`}/>
        </div>
        <BuscaNome />
        <BuscaNumero />
      </div>
      <Footer />
    </div>
  );
};

export default Pagina;