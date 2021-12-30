import React from "react";

function Banner() {
    return <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1>Desenvolvimento de aplicações de qualquer porte ou finalidade</h1>
                    <h1>Consultoria para sua pequena, média ou grande empresa</h1>
                    
                    <a href="/reactn/app/registrar" className="btn btn-outline-primary mt-3 me-4">Criar conta</a>
                    <a href="/reactn/app" className="btn btn-outline-success mt-3">Fazer login</a>
                    
                </div>
                <div className="col-lg-6 mt-5">
                    <img src="Images/print_vs-code.png" />
                </div>
            </div>
        </div>
    </section>
}

export default Banner;