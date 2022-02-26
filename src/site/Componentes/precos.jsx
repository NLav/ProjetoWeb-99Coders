import React from "react";

function Precos() {
    return <section id="precos">
        <div className="container">
            <div className="row">
                <div className="pricing-header p-3 pb-md-4">
                    <h1 className="display-4 fw-normal">Preços</h1>
                    <p className="fs-5 text-muted">Planos e opções de acordo com a necessidade da sua empresa!</p>
                </div>
                <div className="col-lg-6">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Básico</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">R$50<small className="text-muted fw-light">/hr</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Empresas de pequeno porte</li>
                        <li>Atendimento sem prioridade</li>
                        <li>Atendimento das 8hs às 18hs, de segunda à sexta</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Entrar em contato</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">Avançado</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">R$100<small className="text-muted fw-light">/hr</small></h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        <li>Empresas de qualquer porte porte</li>
                        <li>Atendimento com prioridade</li>
                        <li>Atendimento das 24 horas por dia, 7 dias por semana</li>
                        </ul>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Entrar em contato</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
}

export default Precos;