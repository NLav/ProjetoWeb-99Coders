import React from "react";

function Testemunhos() {
    return <section id="testemunhos">
        <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="Images/img_testemunhos_1.jpg" class="d-block w-75 ms-auto me-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block bg-white bg-opacity-50">
                <h5>Angélico Advogados</h5>
                <p>Ótimo serviço prestado desde sempre!</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="Images/img_testemunhos_2.png" class="d-block w-75 ms-auto me-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block bg-white bg-opacity-50">
                <h5>Therma Automação e Projetos</h5>
                <p>Trabalho de excelente qualidade!</p>
            </div>
            </div>
            <div class="carousel-item">
            <img src="Images/img_testemunhos_3.png" class="d-block w-75 ms-auto me-auto" alt="..." />
            <div class="carousel-caption d-none d-md-block bg-white bg-opacity-50">
                <h5>Worth</h5>
                <p>Atendimento digno e justo!</p>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </section>
}

export default Testemunhos;