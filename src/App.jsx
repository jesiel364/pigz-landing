import "./App.css";
import PigzLogo from './assets/logo.svg';
import Logo2 from './assets/logo2.svg';
import Burger1 from './assets/burger1/500.png';
import Store from './assets/icones-banner/store.svg';
import Smartphone from './assets/icones-banner/smartphone.svg';
import PigzGestao from './assets/icones-banner/pigz-gestao.svg';
import Print from './assets/icones-banner/print.svg';

function Navbar() {
  return (
    <div className="nav-div">
      <div>
      <img className="Logo" src={PigzLogo} alt="React Logo" />
      </div>
      <div>
        <button className="Btn">Já sou parceiro</button>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="Container1">
      <div class="title-div">
        <h2>Pigz: tudo que você precisa pra vender mais!</h2>

        <div>
        <img src={Burger1} />
        </div>

      </div>
      <div>
        <p>
          Temos uma equipe ansiosa para cadastrar seus produtos no Pigz
          Marketplace e deixar sua loja pontinha para iniciar as vendas.
        </p> 
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="form1">
      <form>
        <p class="title">Quero vender no Pigz</p>
        <p>Dê o primeiro passo para aumentar as suas vendas.</p>

        <div className="Form-input">
          <label>Nome</label><br />
          <input type="text" placeholder="Jesiel Gomes"/>
        </div>
        <div className="Form-input" >
          <label>Email</label><br />
          <input type="email" placeholder="jesiel@email.com"/>
        </div>
        <div className="Form-input" >
          <label>Telefone</label><br />
          <input type="phone" placeholder="(95) 99875-5432"/>
        </div>

        <p >Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</p>

        <button className="Btn">Já sou parceiro</button>
      </form>
    </div>
  );
}

function Secao(){

  
  return (
    <div id="div-meio">
      <img id="logo2" src={Logo2} />

      <p>Você tem um novo Pigzdido!</p>

      <div className="card-banner">
        <img src={Store} />
        <p id="title">Marketplace</p>
        <p id="desc">Pra sua loja vender mais</p>
      </div>
      <div className="card-banner">
        <img src={Smartphone} />
        <p id="title">É fácil e rápido</p>
        <p id="desc">Fazer um pedido no Pigz</p>
      </div>
      <div className="card-banner">
        <img src={PigzGestao} />
        <p id="title">Pigz Gestão</p>
        <p id="desc">Você no controle, sempre</p>
      </div>
      <div className="card-banner">
        <img src={Print} />
        <p id="title">Vias de impressão</p>
        <p id="desc">Vias de impressão</p>
      </div>
      
    </div>
  );
}

function Secao2(){
  return (
    <div className="Secao2">
      <p class='title'>Tudo que você precisa<br></br> por apenas R$199/mês</p>
      <p class="desc">Tenha todas as funcionalidades<br></br> Pigz sem taxa de adesão, sem<br></br> comissão por cada venda, sem<br></br> letrinhas miúdas.</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="Wrapper" >
      <Navbar />
      <div className='Div1'>
      <Container1 />
      <Form />
      </div>

      <Secao />
      <Secao2 />
    </div>
  );
}
