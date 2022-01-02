import React from "react";
import { Link } from "react-router-dom";
import "./novo-cliente.css";

function NovoCliente() {
    var ano = new Date().getFullYear();

    return <section className="d-flex" id="section-cadastro-cliente">

            <form action="/app/home" className="form-cadastro-cliente">

                <h1 className="h3 mb-3 fw-normal">Cadastre um novo cliente</h1>

                <div className="form-floating">
                    <input type="text" className="form-control form-control-cadastro-cliente" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Nome completo</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control form-control-cadastro-cliente" id="floatingEmail" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Endereço de e-mail</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control form-control-cadastro-cliente" id="floatingTelefone" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Número de telefone</label>
                </div>

                <div className="row justify-content-center">
                    <Link to={"/app/home"} className="btn btn btn-danger btn-cadastro-cliente">Cancelar</Link>
                    <button className="btn btn btn-success btn-cadastro-cliente" type="button">Adicionar</button>
                </div>

            </form>

    </section>
}

export default NovoCliente;