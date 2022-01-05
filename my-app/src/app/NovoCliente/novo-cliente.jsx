import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TelefoneInput from "../Componentes/Input Mask/telefone-cliente";
import db from "../Config/firebase";
import Swal from "sweetalert2";
import "./novo-cliente.css";

function NovoCliente() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const swalDialogCadastroCliente = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success ms-3",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    })

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
                dialogCadastrarCliente();
            }).catch((erro) => {
                setMensagem(erro);
            });
        }
    }

    function dialogCadastrarCliente() {
        swalDialogCadastroCliente.fire({
            text: "Gostaria de cadastrar outro cliente?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            reverseButtons: true,
            background: "#000",
            color: "#FFF",
            confirmButtonColor: "#E8641B"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                navigate("/app/home");
            }
        })
    }

    return <section className="d-flex" id="section-cadastro-cliente">

        <form action="/app/home" className="form-cadastro-cliente">

            <div className="text-center">
                <a href="/">
                    <img className="mb-4" src="/Images/logo_nr-crm-small.png" alt="" width="72" height="72" />
                </a>
            </div>

            <h1 className="h3 mb-3 fw-normal">Cadastre um novo cliente</h1>

            <label htmlFor="name" className="lbl-cadastro-cliente" >Nome</label>
            <input onChange={e => setNome(e.target.value)} type="text" className="form-control form-control-cadastro-cliente" id="name" placeholder="Nome" />
            <label htmlFor="email" className="lbl-cadastro-cliente" >Endereço de e-mail</label>
            <input onChange={e => setEmail(e.target.value)} type="email" className="form-control form-control-cadastro-cliente" id="email" placeholder="nome@exemplo.com" />
            <label htmlFor="telefone" className="lbl-cadastro-cliente" >Número de telefone</label>
            <TelefoneInput onChange={e => setTelefone(e.target.value)} value={telefone} type="text" className="form-control form-control-cadastro-cliente" id="telefone" placeholder="(00) 0000-0000" />

            <div className="row justify-content-center">
                <Link to={"/app/home"} className="btn btn btn-danger btn-cadastro-cliente">Cancelar</Link>
                <button onClick={CadastrarCliente} className="btn btn btn-success btn-cadastro-cliente" type="button">Adicionar</button>
            </div>

            {
                mensagem !== "" ? <div className="alert alert-danger mt-2 text-center"> {mensagem} </div> : null
            }

        </form>

    </section>
}

export default NovoCliente;