import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../Config/firebase";
import ListaClientes from "../Componentes/ListaCliente/lista-cliente";
import Navbar from "../Componentes/Navbar/navbar";
import "./home.css";

function Home() {

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState("");

    let filtroClientes = [];

    useEffect(() => {
        onSnapshot(collection(db, "clientes"), clientes => {
            clientes.docs.forEach(cliente => {
                if (cliente.data().nome.toLowerCase().indexOf(busca) >= 0) {
                    filtroClientes.push({
                        id: cliente.id,
                        nome: cliente.data().nome,
                        email: cliente.data().email,
                        telefone: cliente.data().telefone,
                    });
                }
            })
            setClientes(filtroClientes)
        })
    }, [busca])

    return <section>
        <section className="section-home mx-auto">
            <Navbar />
            <div className="container-fluid titulo-clientes">
                <h1>Clientes</h1>
                <div className="row mb-3">
                    <div className="col-4">
                        <Link to="/app/novocliente" className="btn btn-outline-success btn-cliente-adicionar">Adicionar cliente</Link>
                    </div>
                    <div className="col-1">

                    </div>

                    <div className="col-7">
                        <form className="input-group justify-content-end">
                            <input onChange={e => setBusca(e.target.value)} type="search" className="form-control form-control-busca" placeholder="Pesquisar por nome" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success btn-cliente-busca" type="button">Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ListaClientes arrayClientes={clientes} />
            </div>
        </section>
    </section>
}

export default Home;