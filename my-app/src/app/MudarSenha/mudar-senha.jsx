import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./mudar-senha.css";

function MudarSenha() {
    var ano = new Date().getFullYear();

    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");

    const auth = getAuth();

    function EnviarEmail () {
        
        setMensagem("");

        if (!email) {
            
            setMensagem("Preencha o campo!");
        
        } else {

            sendPasswordResetEmail(auth, email)
                .then(firebaseUser => {
                    setMensagem("sucesso");
                })
                .catch(error => {
                    if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                        setMensagem("A senha deve possuir pelo menos 6 caracteres!");
                    } else if (error.message === "Firebase: Error (auth/invalid-email).") {
                        setMensagem("E-mail inválido!");
                    } else if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                        setMensagem("O e-mail já está em uso por outra conta!")
                    } else {
                        setMensagem("Erro ao criar conta: " + error.message);
                    }
                })

        }

    }

    return <section className="d-flex align-items-center text-center form-container" id="section-mudar-senha">

        <form className="form-sign">
            <a href="/">
                <img className="mb-4" src="/Images/logo_nr-dev-con-small.png" alt="" width="72" height="72" />
            </a>
            <h1 className="h3 mb-3 fw-normal">Recuperação de senha</h1>

            <div className="form-floating">
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control form-control-login" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Endereço de e-mail</label>
            </div>

            <button onClick={EnviarEmail} className="w-100 btn btn-lg btn-success" type="button">Enviar</button>

            <div className="link-voltar-login mt-2 text-start">
                <Link to={"/app"}>Voltar para a tela de login</Link>
            </div>

            {
                mensagem === "sucesso" 
                    ? <div className="alert alert-success mt-2"> E-mail enviado com sucesso </div> 
                    : mensagem === ""
                        ? null
                        : <div className="alert alert-danger mt-2"> {mensagem} </div>
            }

            <Link to={"/app/registrar"} className="w-100 btn btn-lg btn-outline-primary mt-5">Criar conta</Link>

            <p className="mt-5 mb-3 text-muted">Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
        </form>

    </section>;
}

export default MudarSenha;