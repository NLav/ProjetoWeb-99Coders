import React from "react";
import {Link} from 'react-router-dom';
import './mudar-senha.css';

function MudarSenha() {
    var ano = new Date().getFullYear();
    return <section className="d-flex align-items-center text-center form-container" id="section-mudar-senha">

        <form className="form-sign">
            <img className="mb-4" src="/Images/logo_nr-dev-con-small.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 fw-normal">Recuperação de senha</h1>

                <div className="form-floating">
                    <input type="email" className="form-control form-control-login" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Endereço de e-mail</label>
                </div>
                
                <button className="w-100 btn btn-lg btn-success" type="submit">Enviar</button>
                
                <div className="link-voltar-login mt-2 text-start">
                    <Link to={"/app"}>Voltar para a tela de login</Link>
                </div>

                <Link to={"/app/registrar"} className="w-100 btn btn-lg btn-outline-primary mt-5">Criar conta</Link>

                <p className="mt-5 mb-3 text-muted">Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
        </form>

    </section>;
}

export default MudarSenha;