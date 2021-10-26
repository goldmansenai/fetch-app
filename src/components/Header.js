import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'

const Header = () => {
    return(
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand nav-link" href="#">PokeAPI</a>
            <div className="links">
                <a className="nav-link disabled" href="#">Marvel API</a>
                <a className="nav-link disabled" href="#">Covid-19 API</a>
                <a className="nav-link disabled" href="#">Clima API</a>
            </div>
        </nav>
    )  
}

export default Header;