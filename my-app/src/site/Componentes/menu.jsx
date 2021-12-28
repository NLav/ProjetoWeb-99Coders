import React from "react";

function Menu() {
    return <nav id="menu" className="navbar fixed-top navbar-expand-lg navbar-dark">
    <div className="container">
      <a classNameName="navbar-brand" href="#">
          <img className="me-2" src="Images/logo_nr-dev-con.png" alt="" height="50" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#banner">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testemunhos">Clientes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#precos">Planos e Preços</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">Contato</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Menu;