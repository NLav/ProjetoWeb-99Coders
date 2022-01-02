import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../Config/firebase";
import "./lista-cliente.css";

/*
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
*/

function ListaClientes() {

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "clientes"), clientes =>
            setClientes(clientes.docs.map(cliente => ({ ...cliente.data(), id: cliente.id })))
        )
    }, [])

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