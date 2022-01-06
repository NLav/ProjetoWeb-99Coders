import React from "react";

function Banner() {
    return <section id="banner">
        <div className="container">
            <div className="row mb-2">
                <div className="col-lg-6">
                    <h1>Desenvolvimento de aplicações de qualquer porte ou finalidade</h1>
                    <h1>Consultoria para sua pequena, média ou grande empresa</h1>
                </div>
                <div className="col-lg-6 mt-3">
                    <img src="/reactn/Images/print_vs-code.png" alt="printscreen_banner"/>
                </div>
            </div>
            <div className="row container container-banner-crm">
                <h1>Teste nosso sistema de CRM</h1>
                <a href="/reactn/app/registrar" className="btn btn-outline-primary btn-banner-crm mt-3 ms-auto">Criar conta</a>
                <a href="/reactn/app" className="btn btn-outline-success btn-banner-crm mt-3 me-auto">Fazer login</a>
            </div>
        </div>
    </section>
}

export default Banner;