import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { AuthContext } from "../Context/auth";
import "./login.css";

function Login() {
    var ano = new Date().getFullYear();

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("N");
    const { setLogado } = React.useContext(AuthContext);
    
    const auth = getAuth();

    function LoginUsuario () {

        if (!email || !senha) {
            setErro("S");
        } else {
            signInWithEmailAndPassword(auth, email, senha)
                .then(firebaseUser => {
                    localStorage.setItem("logado", "S");
                    setErro("N");
                    setLogado(true);
                    navigate("/app/home");
                })
                .catch(error => {
                    localStorage.setItem("logado", "N");
                    setErro("S");
                    setLogado(false);
                });
        }
    }
    
    return <section className="d-flex align-items-center text-center form-container" id="section-login">

        <form action="/app/home" className="form-sign">
            <a href="/">
                <img className="mb-4" src="/Images/logo_nr-dev-con-small.png" alt="" width="72" height="72" />
            </a>
            
            <h1 className="h3 mb-3 fw-normal">Acesse sua conta</h1>

            <div className="form-floating">
                <input onChange={e => setEmail(e.target.value)} type="email" className="form-control form-control-login" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Endereço de e-mail</label>
            </div>
            <div className="form-floating">
                <input onChange={e => setSenha(e.target.value)} type="password" className="form-control form-control-login" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Senha</label>
            </div>
                
            <button className="w-100 btn btn-lg btn-success" type="button" onClick={LoginUsuario}>Acessar</button>

            {
                erro === "S" ? <div className="alert alert-danger mt-2">E-mail ou Senha inválidos</div> : null
            }
            
            <div className="link-esqueci mt-2 text-start">
                <Link to={"/app/mudarsenha"}>Esqueci minha senha</Link>
            </div>

            <Link to={"/app/registrar"} className="w-100 btn btn-lg btn-outline-primary mt-5">Criar conta</Link>

            <p className="mt-5 mb-3 text-muted">Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
        </form>

    </section>;
}

export default Login;