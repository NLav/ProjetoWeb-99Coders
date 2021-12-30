import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Site from './site/site';
import Login from './app/Login/login';
import Registrar from './app/Registrar/registrar';
import MudarSenha from './app/MudarSenha/mudar-senha';
import Home from './app/Home/home';
import NovoCliente from './app/NovoCliente/novo-cliente';

function App() {
    return <BrowserRouter>
    <Routes>
        <Route exact path='reactn/' element={<Site/>} />
        <Route exact path='reactn/app' element={<Login/>} ></Route>
        <Route exact path='reactn/app/registrar' element={<Registrar/>} />
        <Route exact path='reactn/app/mudarsenha' element={<MudarSenha/>} />
        <Route exact path='reactn/app/home' element={<Home/>} />
        <Route exact path='reactn/app/novocliente' element={<NovoCliente/>} />

    </Routes>
    </BrowserRouter>
}

export default App;