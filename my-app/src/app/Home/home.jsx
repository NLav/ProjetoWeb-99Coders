import React from "react";
import ListaClientes from "../Componentes/ListaCliente/lista-cliente";
import Navbar from "../Componentes/Navbar/navbar";
import "./home.css";

function Home() {
    return <section className="section-home">
        <Navbar />
        <div className="container-fluid titulo-clientes">
            <h1>Cadastro de Clientes</h1>
            <ListaClientes />
        </div>
    </section>
}

export default Home;