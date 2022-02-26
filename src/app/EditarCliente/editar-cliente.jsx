import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TelefoneInput from "../Componentes/Input Mask/telefone-cliente";
import db from "../Config/firebase";
import "./editar-cliente.css";

function EditarCliente(props) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    let navigate = useNavigate();

    const url = window.location.href;
    const clienteId = url.split("/").pop();

    useEffect(() => {
        getDoc(doc(db, "clientes", clienteId)).then((r) => {
            setNome(r.data().nome);
            setEmail(r.data().email);
            setTelefone(r.data().telefone);
        })
    }, [])

    function AlterarCliente() {

        if (nome.length === 0 || email.length === 0 || telefone.length === 0) {
            setMensagem("Preencha todos os campos!");
        } else {
            updateDoc(doc(db, "clientes", clienteId), {
                nome: nome,
                email: email,
                telefone: telefone
            }).then(() => {
                setMensagem("");
                navigate("/app/home");
            }).catch((erro) => {
                setMensagem(erro);
            });
        }
    }

    return <section className="d-flex" id="section-editar-cliente">

        <form action="/app/home" className="form-editar-cliente">
            <div className="text-center">
                <a href="/">
                    <img className="mb-4" src="/Images/logo_nr-crm-small.png" alt="" width="72" height="72" />
                </a>
            </div>

            <h1 className="h3 mb-3 fw-normal">Editar os dados do cliente</h1>

            <label htmlFor="name" className="lbl-editar-cliente" >Código</label>
            <input type="text" value={clienteId} className="form-control form-control-editar-cliente bg-dark" id="codigo" placeholder="Código" disabled />
            <label htmlFor="name" className="lbl-editar-cliente" >Nome</label>
            <input onChange={e => setNome(e.target.value)} type="text" value={nome} className="form-control form-control-editar-cliente" id="name" placeholder="Nome" />
            <label htmlFor="email" className="lbl-editar-cliente" >Endereço de e-mail</label>
            <input onChange={e => setEmail(e.target.value)} type="email" value={email} className="form-control form-control-editar-cliente" id="email" placeholder="nome@exemplo.com" />
            <label htmlFor="telefone" className="lbl-editar-cliente" >Número de telefone</label>
            <TelefoneInput onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control form-control-editar-cliente" id="telefone" placeholder="(00) 0000-0000" />

            <div className="row justify-content-center">
                <Link to={"/app/home"} className="btn btn btn-danger btn-editar-cliente">Cancelar</Link>
                <button onClick={AlterarCliente} className="btn btn btn-success btn-editar-cliente" type="button">Salvar</button>
            </div>

            {
                mensagem !== "" ? <div className="alert alert-danger mt-2"> {mensagem} </div> : null
            }

        </form>

    </section>
}

export default EditarCliente;