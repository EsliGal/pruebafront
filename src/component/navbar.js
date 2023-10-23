import React from "react";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a href="/" className="navbar-brand">Inicio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/">Género</a>
                        <a className="nav-link active" aria-current="page" href="/">Pais</a>
                        <a className="nav-link active" aria-current="page" href="/">Tv Shows</a>
                        <a className="nav-link active" aria-current="page" href="/">Películas</a>
                    </div>
                </div>
                <div className="collapse navbar-collapse">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outlines-secondary" type="submit">Buscar</button>
                    </form>
                </div>
                <div className="container-fluid">
                    <a href="#!" className="navbar-brand">online</a>
                    <a className="navbar-brand" href="/">Username</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;