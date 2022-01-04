import React from "react";
import InputMask from "react-input-mask";

function TelefoneInput(props) {
    return <InputMask mask="(99) 9999-9999" onChange={props.onChange} className={props.className} value={props.value} id={props.id} placeholder={props.placeholder} />;
}

export default TelefoneInput;