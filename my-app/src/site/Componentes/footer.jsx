import React from "react";

function Footer() {
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="#"><img src="Images/ic_footer_facebook.png" height={40} /></a></li>
                <li className="list-inline-item"><a href="#"><img src="Images/ic_footer_twitter.png" height={40} /></a></li>
                <li className="list-inline-item"><a href="#"><img src="Images/ic_footer_instagram.png" height={40} /></a></li>
                <li className="list-inline-item"><a href="#"><img src="Images/ic_footer_linkedin.png" height={40} /></a></li>
            </ul>
        </div>
        <a href="">contato@NRDevECon.com.br</a>
        <p>Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
    </section>
}

export default Footer;