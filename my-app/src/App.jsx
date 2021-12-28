import React from 'react';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import clientes from './clientes';

function createCard(cliente) {
    return <Card 
    key={cliente.id}
    nome={cliente.nome}
    email={cliente.email}
    telefone={cliente.telefone} />
}

function App() {
    return <div>
        <Header />
        {clientes.map(createCard)}
        <Footer />
    </div>
}

export default App;