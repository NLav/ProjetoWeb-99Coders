import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/auth";
import "./navbar.css";

function Navbar() {

  const navigate = useNavigate();
  const { setLogado } = React.useContext(AuthContext);
  
  function SairApp() {
    localStorage.setItem("logado", "N");
    setLogado(false);
    navigate("/reactn/app");
  }

  return <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark">
    <div className="container">
      <Link className="navbar-brand" to={"/reactn/app/home"}>
        <img className="me-2" src="/reactn/Images/logo_nr-crm.png" alt="" height="55" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
          <li className="nav-item">
            <Link to={"/reactn/app/home"} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/reactn/app/novocliente"} className="nav-link">Cadastrar cliente</Link>
          </li>
          <li className="nav-item sair">
            <a onClick={SairApp} href="/reactn/app" className="nav-link" aria-current="page">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;