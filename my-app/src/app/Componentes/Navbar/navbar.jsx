import React from "react";
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark">
    <div className="container">
      <Link classNameName="navbar-brand" to={"/app/home"}>
          <img className="me-2" src="/Images/logo_nr-dev-con.png" alt="" height="60" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
          <li className="nav-item">
            <Link to={"/app/home"} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/app/novocliente"} className="nav-link">Cadastrar cliente</Link>
          </li>
          <li className="nav-item">
            <Link to={"/app"} className="nav-link">Sair</Link>
          </li>
        </ul>
        <form className="d-flex">
          {/*<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="floatingInput"/>*/}
          <div className="form-floating form-floating-busca">
            <input type="search" className="form-control form-control-busca" placeholder="buscar" />
            <label for="floatingInput">Buscar</label>
          </div>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navbar;