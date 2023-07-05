import Logo from "/src/assets/logo-footer.svg"
import AppStore from "/src/assets/selo-app-store.svg"
import GPlay from "/src/assets/selo-google-play.svg"
import Call from "/src/assets/icone-fale-conosco.svg"
import Linkedin from "/src/assets/linkedin-with-circle.svg"
import Facebook from "/src/assets/facebook-with-circle.svg"
import Instagram from "/src/assets/instagram-with-circle.svg"
import Youtube from "/src/assets/youtube-with-circle.svg"
import Orange from "/src/assets/logo-orange-horizontal-branco.svg"


export function Footer() {
    return (
        <div className="Footer">

            <div className="App">
                <img id='footer-logo' src={Logo}></img>
                <p id='subtitle'>Tudo que você precisa.</p>

                <p id='desc'>Baixe o APP</p>

                <div id='AppStores'>
                <a href='#'><img src={AppStore}></img></a>
                <a href='#'><img src={GPlay}></img></a>
                </div>
            </div>

            <div className="Sobre">

                <p id='pigz'>Pigz</p>

                <nav>
                    <li><a href="#">Sobre o Pigz</a></li>
                    <li><a href="#">Portal do Parceiro</a></li>
                    <li><a href="#">Quero ser um Pigz Partner</a></li>

                </nav>

            </div>

            <div className="call">

                <div id='fale'>
                    <img src={Call}></img>
                    <p>Fale conosco</p>
                </div>

                <p id='email'>falecom@pigz.com.br</p>
                <p id='phone'>(95) 3224-2603</p>


                <p id='text'>Pigz nas redes</p>
                <div class='div-flex icon-group'>
                    <a href='#'><img src={Linkedin}></img></a>
                    <a href='#'><img src={Instagram}></img></a>
                    <a href='#'><img src={Facebook}></img></a>
                    <a href='#'><img src={Youtube}></img></a>

                </div>
            </div>
                <hr></hr>

            <div id="footer">
                <div className="div-flex links">
                    <a href="#">Nossos termos</a>
                    <a href="#">Privacidade</a>
                    <a href="#">Ajuda</a>
                </div>


                <div className="bottom div-flex">
                    <p>© Copyright 2021 • Pigz • Todos os direitos reservados<br></br>Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
                    <img src={Orange}></img>
                </div>
            </div>

        </div>
    );
}