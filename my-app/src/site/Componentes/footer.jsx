import React from "react";

function Footer() {
    var ano = new Date().getFullYear();

    return <section id="footer">
        <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="#footer"><img src="/reactn/Images/ic_footer_facebook.png" alt="facebook-icon" height={40} /></a></li>
                <li className="list-inline-item"><a href="#footer"><img src="/reactn/Images/ic_footer_twitter.png" alt="twitter-icon" height={40} /></a></li>
                <li className="list-inline-item"><a href="#footer"><img src="/reactn/Images/ic_footer_instagram.png" alt="instagram-icon" height={40} /></a></li>
                <li className="list-inline-item"><a href="#footer"><img src="/reactn/Images/ic_footer_linkedin.png" alt="linkedin-icon" height={40} /></a></li>
            </ul>
        </div>
        <a href="#footer">contato@NRDevECon.com.br</a>
        <p>Desenvolvido por NR Desenvolvimento e Consultoria - {ano}</p>
    </section>
}

export default Footer;