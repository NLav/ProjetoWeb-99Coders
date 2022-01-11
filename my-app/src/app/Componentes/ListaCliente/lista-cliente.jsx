import React from "react";
import { Link } from "react-router-dom";
import "./lista-cliente.css";

function ListaClientes(props) {

    return <table className="table table-dark table-hover table-bordered mx-auto">
        <thead>
            <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                props.arrayClientes.map(cliente =>
                    <tr key={cliente.id}>
                        <th scope="col">{cliente.id}</th>
                        <th scope="col">{cliente.nome}</th>
                        <th scope="col">{cliente.email}</th>
                        <th scope="col">{cliente.telefone}</th>
                        <th scope="col" className="text-center">
                            <Link to={"/app/editarcliente/" + cliente.id} className="me-2 ms-auto"><img className="img-icon-acoes" src="/Images/ic_edit.png" alt="edit-icon" /></Link>
                            <Link to="#" onClick={() => props.clickDeletar(cliente.id)} className="ms-2 me-auto"><img className="img-icon-acoes" src="/Images/ic_delete.png" alt="delete-icon" /></Link>
                        </th>
                    </tr>
                )
            }
        </tbody>
    </table>
}

export default ListaClientes;