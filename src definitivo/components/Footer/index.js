import React from "react";
import "./style.css"
import icon from "../../assets/logoinsta.png";
export default function Footer() {
    return (
        <div>
            <footer class="footer-page">
            <div class="redes">
                    <div class="content-footer">
                        <a href="" class="link-rede-footer"> <img src="" alt=""/>
                            <span><h3>Rede 1</h3></span> </a>
                        <a href="" class="link-rede-footer"> <img src="" alt=""/>
                            <span><h3>Rede 2</h3></span> </a>
                        <div class="content-contact">
                            <p><h4>Número</h4></p>
                            <p><h4>suporte</h4></p>
                             
                        </div>
                    </div>

                </div>

                <div class="text-about">
                    <h1>Nossa ideia</h1>
                    <h4> O Habitarte tem o intuito de promover artistas, aproximando clientes e empresas que precisam de serviço específico de forma prática. Ajudando assim novos criadores divulgando seus serviços e seus contatos.</h4>
                </div>
            </footer>

        </div>
    );

}