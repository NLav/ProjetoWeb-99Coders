import React from "react";

function Card(props){
    return <div>

        <h4>{props.codigo}</h4>
        <h3>{props.nome}</h3>
        <p>{props.email}</p>
        <p>{props.telefone}</p>
        <br />
        <br />
        <br />

    </div>
}

export default Card;