import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import appFirebase from "../Config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./registrar.css";

function Registrar() {
    var ano = new Date().getFullYear();

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const auth = getAuth();

    function RegistrarUsuario() {

        setMensagem("");

        if (!email || !senha) {

            setMensagem("Preencha todos os campos!");
            return
        
        } else {

            createUserWithEmailAndPassword(auth, email, senha)
                .then(firebaseUser => {
                    alert("Usuário cadastrado com sucesso!");
                    navigate("/app");
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
                    
                });
        }
    }

    return <section className="d-flex align-items-center text-center form-container" id="section-registrar">

        <form className="form-sign">
            <a href="/">
                <img className="mb-4" src="/Images/logo_nr-dev-con-small.png" alt="" width="72" height="72" />
            </a>
            <h1 className="h3 mb-3 fw-normal">Crie uma conta</h1>

            <div className="form-floating">
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control form-control-registrar" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Endereço de e-mail</label>
            </div>
            <div className="form-floating">
                <input onChange={e => setSenha(e.target.value)} type="password" className="form-control form-control-registrar" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>

            <div className="form-floating">
                <input type="password" className="form-control form-control-registrar" id="floatingConfirmPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Confirmar Senha</label>
            </div>

            <button className="w-100 btn btn-lg btn-success" type="button" onClick={RegistrarUsuario}>Criar conta</button>

            {
                mensagem !== "" ? <div className="alert alert-danger mt-2"> {mensagem} </div> : null
            }

            <div className="link-possuo mt-2 text-start">
                <Link to={"/app"}>Já possuo uma conta</Link>
            </div>

            <p className="mt-5 mb-3 text-muted">Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
        </form>

    </section>;
}

export default Registrar;