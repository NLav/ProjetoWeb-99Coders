import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Site from "./site/site";
import Login from "./app/Login/login";
import Registrar from "./app/Registrar/registrar";
import MudarSenha from "./app/MudarSenha/mudar-senha";
import Home from "./app/Home/home";
import NovoCliente from "./app/NovoCliente/novo-cliente";
import EditarCliente from "./app/EditarCliente/editar-cliente";
import { AuthContext } from "./app/Context/auth";

function App() {

    const { logado } = useContext(AuthContext);

    return <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Site />} />
            <Route exact path="/app" element={<Login />} />
            <Route exact path="/app/registrar" element={<Registrar />} />
            <Route exact path="/app/mudarsenha" element={<MudarSenha />} />
            <Route exact path="/app/home" element={logado ? <Home /> : <Login />} />
            <Route exact path="/app/novocliente" element={logado ? <NovoCliente /> : <Login />} />
            <Route exact path="/app/editarcliente/:id" element={logado ? <EditarCliente /> : <Login />} />
        </Routes>
    </BrowserRouter>
}

export default App;