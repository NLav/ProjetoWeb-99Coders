import React from "react";
import InputMask from "react-input-mask";

function TelefoneInput(props) {
    return <InputMask mask={ props.value.length < 15 ? "(99) 9999-99999" : "(99) 9 9999-9999" } maskChar={null}
    onChange={props.onChange} className={props.className} value={props.value} id={props.id} placeholder={props.placeholder} />;
}

export default TelefoneInput;