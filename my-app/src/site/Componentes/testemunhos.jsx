import React from "react";

function Testemunhos() {
    return <section id="testemunhos">
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="pricing-header p-3 pb-md-4">
                <h1 className="display-4 fw-normal">Clientes</h1>
                <p className="fs-5 text-muted">Planos e opções de acordo com a necessidade da sua empresa!</p>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/reactn/Images/img_testemunhos_1.jpg" className="d-block w-75 ms-auto me-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block bg-white bg-opacity-50">
                <h5>Angélico Advogados</h5>
                <p>Ótimo serviço prestado desde sempre!</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="/reactn/Images/img_testemunhos_2.png" className="d-block w-75 ms-auto me-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block bg-white bg-opacity-50">
                <h5>Therma Automação e Projetos</h5>
                <p>Trabalho de excelente qualidade!</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="/reactn/Images/img_testemunhos_3.png" className="d-block w-75 ms-auto me-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block bg-white bg-opacity-50">
                <h5>Worth</h5>
                <p>Atendimento digno e justo!</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </section>
}

export default Testemunhos;