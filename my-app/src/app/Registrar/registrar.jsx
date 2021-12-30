import React from "react";
import {Link} from 'react-router-dom';
import './registrar.css';

function Registrar() {
    var ano = new Date().getFullYear();
    return <section className="d-flex align-items-center text-center form-container" id="section-registrar">

        <form className="form-sign">
            <img className="mb-4" src="/reactn/Images/logo_nr-dev-con-small.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 fw-normal">Crie uma conta</h1>

                <div className="form-floating">
                    <input type="email" className="form-control form-control-registrar" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Endereço de e-mail</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control form-control-registrar" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control form-control-registrar" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Confirmar Senha</label>
                </div>
                
                <button className="w-100 btn btn-lg btn-success" type="submit">Criar conta</button>
                
                <div className="link-possuo mt-2 text-start">
                    <Link to={"/reactn/app"}>Já possuo uma conta</Link>
                </div>

                <p className="mt-5 mb-3 text-muted">Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
        </form>

    </section>;
}

export default Registrar;