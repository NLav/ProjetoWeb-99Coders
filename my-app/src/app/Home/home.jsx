import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import db from "../Config/firebase";
import ListaClientes from "../Componentes/ListaCliente/lista-cliente";
import Navbar from "../Componentes/Navbar/navbar";
import "./home.css";

function Home() {

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState("");
    const [excluido, setExcluido] = useState("");
    const [mensagem, setMensagem] = useState("");

    let filtroClientes = [];
    let navigate = useNavigate();

    const q = query(collection(db, "clientes"));

    const querySnapshot = getDocs(q);

    function deletarCliente(id) {
        deleteDoc(doc(db, "clientes", id)).then(() => {
            setExcluido(id);
        });
    }

    useEffect(() => {

        querySnapshot.then(clientes => {
            clientes.docs.map((cliente) => {
                if (cliente.data().nome.toLowerCase().indexOf(busca) >= 0) {
                    filtroClientes.push({
                        id: cliente.id,
                        nome: cliente.data().nome,
                        email: cliente.data().email,
                        telefone: cliente.data().telefone,
                    });
                }
            })
            setClientes(filtroClientes);
        })

        if (clientes.length === 0) {
            setMensagem("Nenhum cliente cadastrado!")
        } else {
            setMensagem("");
        }

    }, [busca, excluido, clientes])

    return <section className="section-home">
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
                    </form>
                </div>
            </div>
            <ListaClientes arrayClientes={clientes} clickDeletar={deletarCliente} />
            {
                mensagem !== "" ? <div className="alert alert-primary text-center mt-2"> {mensagem} </div> : null
            }
        </div>
    </section>
}

export default Home;