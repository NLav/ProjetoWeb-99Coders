import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "../Config/firebase";
import "./novo-cliente.css";

function NovoCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    let navigate = useNavigate();

    function CadastrarCliente() {

        if (nome.length === 0 || email.length === 0 || telefone.length === 0) {
            setMensagem("Preencha todos os campos!");
        } else {
            addDoc(collection(db, "clientes"), {
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

    return <section className="d-flex" id="section-cadastro-cliente">

        <form action="/app/home" className="form-cadastro-cliente">

            <h1 className="h3 mb-3 fw-normal">Cadastre um novo cliente</h1>

            <div className="form-floating">
                <input onChange={e => setNome(e.target.value)} type="text" className="form-control form-control-cadastro-cliente" id="floatingName" placeholder="Name" />
                <label htmlFor="floatingName">Nome completo</label>
            </div>
            <div className="form-floating">
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control form-control-cadastro-cliente" id="floatingEmail" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Endereço de e-mail</label>
            </div>
            <div className="form-floating">
                <input onChange={e => setTelefone(e.target.value)} type="text" className="form-control form-control-cadastro-cliente" id="floatingTelefone" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Número de telefone</label>
            </div>

            <div className="row justify-content-center">
                <Link to={"/app/home"} className="btn btn btn-danger btn-cadastro-cliente">Cancelar</Link>
                <button onClick={CadastrarCliente} className="btn btn btn-success btn-cadastro-cliente" type="button">Adicionar</button>
            </div>

            {
                mensagem !== "" ? <div className="alert alert-danger mt-2"> {mensagem} </div> : null
            }

        </form>

    </section>
}

export default NovoCliente;