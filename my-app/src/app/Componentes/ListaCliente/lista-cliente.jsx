import React from "react";
import "./lista-cliente.css";
import "../../Dados/clientes"
import clientes from "../../Dados/clientes";

function ListaClientes() {
    return <table className="table table-dark table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
            </tr>
        </thead>
        <tbody>

            {
                clientes.map(cliente =>
                    <tr key={cliente.id}>
                        <th scope="col">{cliente.id}</th>
                        <th scope="col">{cliente.nome}</th>
                        <th scope="col">{cliente.email}</th>
                        <th scope="col">{cliente.telefone}</th>
                    </tr>
                )
            }

        </tbody>
    </table>
}

export default ListaClientes;