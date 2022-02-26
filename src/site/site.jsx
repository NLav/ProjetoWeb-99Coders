import React from "react";
import Banner from "./Componentes/banner";
import Features from "./Componentes/features";
import Footer from "./Componentes/footer";
import Menu from "./Componentes/menu"
import Precos from "./Componentes/precos";
import Testemunhos from "./Componentes/testemunhos";

function Site() {
    return <div>
        <Menu />
        <Banner />
        <Features />
        <Testemunhos />
        <Precos />
        <Footer />
    </div>;
}

export default Site;