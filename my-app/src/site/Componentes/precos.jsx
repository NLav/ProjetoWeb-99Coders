import React from "react";

function Precos() {
    return <section id="precos">
        <div className="container">
            <div className="row">
                <div class="pricing-header p-3 pb-md-4">
                    <h1 class="display-4 fw-normal">Preços</h1>
                    <p class="fs-5 text-muted">Planos e opções de acordo com a necessidade da sua empresa!</p>
                </div>
                <div className="col-lg-6">
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Básico</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">R$50<small class="text-muted fw-light">/hr</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                        <li>Empresas de pequeno porte</li>
                        <li>Atendimento sem prioridade</li>
                        <li>Atendimento das 8hs às 18hs, de segunda à sexta</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Entrar em contato</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Avançado</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$100<small class="text-muted fw-light">/hr</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                        <li>Empresas de qualquer porte porte</li>
                        <li>Atendimento com prioridade</li>
                        <li>Atendimento das 24 horas por dia, 7 dias por semana</li>
                        </ul>
                        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Entrar em contato</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </section>
}

export default Precos;