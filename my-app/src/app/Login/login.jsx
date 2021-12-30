import React from "react";

function Login() {
    var ano = new Date().getFullYear();
    return <section className="d-flex align-items-center text-center form-container" id="section-login">

        <form className="form-signin">
            <img className="mb-4" src="Images/logo_nr-dev-con-small.png" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 fw-normal">Acesse sua conta</h1>

                <div className="form-floating">
                    <input type="email" className="form-control form-control-login" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Endereço de e-mail</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control form-control-login" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Senha</label>
                </div>
                
                <button className="w-100 btn btn-lg btn-success" type="submit">Acessar</button>
                
                <div className="link-esqueci mt-2 text-start">
                    <a href="#" className="mt">Esqueci minha senha</a>
                </div>

                <button className="w-100 btn btn-lg btn-outline-primary mt-5" type="submit">Criar conta</button>

                <p className="mt-5 mb-3 text-muted">Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
        </form>

    </section>;
}

export default Login;