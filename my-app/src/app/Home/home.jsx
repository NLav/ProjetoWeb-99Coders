import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import db from "../Config/firebase";
import Swal from "sweetalert2"
import ListaClientes from "../Componentes/ListaCliente/lista-cliente";
import Navbar from "../Componentes/Navbar/navbar";
import "./home.css";

function Home() {

    const [clientes, setClientes] = useState([]);
    const [busca, setBusca] = useState("");
    const [excluido, setExcluido] = useState("");
    const [mensagem, setMensagem] = useState("");

    let filtroClientes = [];

    const swalConfirmacaoDeletarCliente = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success ms-3",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    })

    function deletarCliente(id) {
        deleteDoc(doc(db, "clientes", id)).then(() => {
            setExcluido(id);
        });
    }

    function dialogDeletarCliente(id) {
        swalConfirmacaoDeletarCliente.fire({
            title: "Tem certeza?",
            text: "O cliente " + id + " será deletado. Essa ação não poderá ser desfeita!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, delete!",
            cancelButtonText: "Não, cancele!",
            reverseButtons: true,
            background: "#000",
            color: "#FFF",
            confirmButtonColor: "#E8641B"
        }).then((result) => {
            if (result.isConfirmed) {
                swalConfirmacaoDeletarCliente.fire({
                    title: "Deletado!",
                    text: "O cliente " + id + " foi deletado.",
                    icon: "success",
                    background: "#000",
                    color: "#FFF",
                    confirmButtonColor: "#E8641B"
                })
                deletarCliente(id);
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalConfirmacaoDeletarCliente.fire({
                    title: "Cancelado!",
                    text: "A ação foi cancelada, o cliente " + id + " não foi deletado!",
                    icon: "error",
                    background: "#000",
                    color: "#FFF",
                    confirmButtonColor: "#E8641B"
                })
            }
        })

    }

    useEffect(() => {

        getDocs(query(collection(db, "clientes"))).then(clientes => {
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
            if (filtroClientes.length === 0) {
                setMensagem("Nenhum cliente cadastrado!")
            } else {
                setMensagem("");
            }
            setClientes(filtroClientes);            
        })
    }, [busca, excluido])

    return <section className="section-home">
        <Navbar />
        <div className="container-fluid titulo-clientes">
            <h1>Clientes</h1>
            <div className="row mb-3">
                <div className="col-4">
                    <Link to="/reactn/app/novocliente" className="btn btn-outline-success btn-cliente-adicionar">Adicionar cliente</Link>
                </div>
                <div className="col-1">

                </div>

                <div className="col-7">
                    <form className="input-group justify-content-end">
                        <input onChange={e => setBusca(e.target.value)} type="search" className="form-control form-control-busca" placeholder="Pesquisar por nome" />
                    </form>
                </div>
            </div>
            <ListaClientes arrayClientes={clientes} clickDeletar={dialogDeletarCliente} />
            {
                mensagem !== "" ? <div className="alert alert-primary text-center mt-2"> {mensagem} </div> : null
            }
        </div>
    </section>
}

export default Home;