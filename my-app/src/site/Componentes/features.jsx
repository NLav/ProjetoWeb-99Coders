import React from "react";

function Features() {
    return <section id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 feature-box">
                    <img src="Images/ic_features_1.png" alt="hand_shake-icon" height={150}/>
                    <h1>Desenvolvimento dedicado</h1>
                    <p className="text-muted">Equipe focada e dedicada para cada projeto</p>
                </div>
                <div className="col-lg-4 feature-box">
                    <img src="Images/ic_features_2.png" alt="gear-icon" height={150}/>
                    <h1>Consultoria personalizada</h1>
                    <p className="text-muted">Equipe focada e dedicada para cada projeto</p>
                </div>
                <div className="col-lg-4 feature-box">
                    <img src="Images/ic_features_3.png" alt="clock-icon" height={150}/>
                    <h1>Atendimento 24hs, 7 dias por semana</h1>
                    <p className="text-muted">Equipe focada e dedicada para cada projeto</p>
                </div>
            </div>
        </div>
    </section>
}

export default Features;